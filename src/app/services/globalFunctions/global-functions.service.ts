import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataManagerService} from '../dataManager/data-manager.service';
import {Subject, Observable} from 'rxjs';
import {PopupItemComponent} from '../../components/popup/popup-item/popup-item.component';
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {
  private subject = new Subject<any>();
  public gallery = [];
  public searchParms = this.getEmptySearchParms();

  public totalRecords: number;
  public totalMovies = 0 ;
  public totalGames = 0 ;
  public totalSeries = 0 ;

  public filteredOptions: Observable<any>;
  public itemsFormControl = new FormControl();
  public applyChangeView = false;

  constructor(
    public matDialog: MatDialog,
    public dataManagerService: DataManagerService,
  ) {
    this.totalMovies = 0 ;
    this.totalGames = 0 ;
    this.totalSeries = 0 ;
  }

  updateGalleryEvent(): Observable<any>{
    return this.subject.asObservable();
  }

  openItemModal(data) {
    const promise = new Promise((resolve, reject) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.id = 'global-functions-modal-component';
      dialogConfig.height = '500px';
      dialogConfig.maxHeight = '500px';
      dialogConfig.width = '55%';
      dialogConfig.maxWidth = '650px';
      dialogConfig.data = data;
      const modalDialog = this.matDialog.open(PopupItemComponent, dialogConfig);
      modalDialog.afterClosed().subscribe(result => {
        console.log('The dialog was closed ------>' + result);
        if (result) {
          resolve(result);
        } else {
          reject(null);
        }
      });
    });
    return promise;
  }

  getEmptySearchParms(){
    return {Title : '', Year: '',imdbID: '',Type: '',Poster: ''}
  }

  public _filterSearch(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.gallery.filter(item => item.Title.toLowerCase().includes(filterValue));
  }

  public _filterTypes(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.gallery.filter(item => item.Type.toLowerCase().includes(filterValue));
  }




  getGallery(type) {
    const promise = new Promise((resolve, reject) => {
      const parm = JSON.parse(JSON.stringify(this.searchParms));
      const parms = ""
      this.dataManagerService.getGalleryData(parms).then((response) => {
        if(type === 'search'){
          // @ts-ignore
          this.gallery = response.results;
          this.filteredOptions = this.itemsFormControl.valueChanges
            .pipe(
              startWith(''),
              map(value => this._filterSearch(value))
            );
        }
        if(type === 'movies'){
          // @ts-ignore
          this.gallery = response.results;
          this.filteredOptions = this.itemsFormControl.valueChanges
            .pipe(
              startWith(''),
              map(value => this._filterTypes("movie"))
            );
        }

        if(type === 'game'){
          // @ts-ignore
          this.gallery = response.results;
          this.filteredOptions = this.itemsFormControl.valueChanges
            .pipe(
              startWith(''),
              map(value => this._filterTypes("game"))
            );
        }

        if(type === 'series'){
          // @ts-ignore
          this.gallery = response.results;
          this.filteredOptions = this.itemsFormControl.valueChanges
            .pipe(
              startWith(''),
              map(value => this._filterTypes("series"))
            );
        }


        this.totalRecords  = this.gallery.length;
        if(this.totalMovies === 0){
          this.getCouterData();
        }
        resolve(this.gallery);
      })
        .catch((error) => {
          this.gallery = error;
          reject(error);
        });
    });
    return promise;
  }

  updateItem(item) {
    const promise = new Promise((resolve, reject) => {

      this.dataManagerService.updateItemyData(item).then((response) => {
        // @ts-ignore
        if (response.RetCode === '0') {
          console.log('response.RetCode' + response);
          resolve(response);
        } else {
          reject(response);
        }
      })
        .catch((error) => {
          this.gallery = error;
          reject(error);
        });
    });
    return promise;
  }


  getCouterData() {
    for (const item of this.gallery) {
      if (item.Type === "movie") {
        this.totalMovies ++
      }
      if (item.Type === "series") {
        this.totalSeries ++
      }
      if (item.Type === "game") {
        this.totalGames ++
      }
    }
  }

}
