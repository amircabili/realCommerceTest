import {ViewChild, Component, ElementRef, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataManagerService} from "../../services/dataManager/data-manager.service";
import {FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {GlobalFunctionsService} from "../../services/globalFunctions/global-functions.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  options: FormGroup;
  public subscription;
  public gallerySelectedData: any;
  public totalRecords: number;
  private subject = new Subject<any>();
  public pic: string;

  public searchInput: string;
  // @ts-ignore
  public noPic = require('../../../media/pics/noPicFound.png');

  constructor(
    public dataManagerService: DataManagerService,
    public globalFunctionsService: GlobalFunctionsService,
    public dialogRef: MatDialogRef<any>,
    public eRef: ElementRef,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
      this.globalFunctionsService.getGallery('search');
  }

  public parms;

  ngOnInit(): void {
  }

  openPopUpItem(indexItem) {
    // @ts-ignore
    this.dialogRef = this.globalFunctionsService.openItemModal(indexItem).then((response) => {
      this.gallerySelectedData = response;
    })
      .catch((error) => {
        //
      });
  }


  refresh() {
    this.globalFunctionsService.getGallery('search');
  }

  clear() {
    this.searchInput = '';
    this.globalFunctionsService.searchParms = this.globalFunctionsService.getEmptySearchParms();
  }

  sort() {
    this.globalFunctionsService.getGallery('sort');
  }

  LocalDate(date): string {
    const value = date;
    const year = value.substring(0,4);
    const month  = value.substring(4,6);
    const day = value.substring(6,9);
    const str =  day + "-" + month + "-" + year ;
    return str;
  }

  onImgError(event) {
    // @ts-ignore
    event.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtF4VdOl8_m-1FayEemKpgZvDuvgHOqAhFQ&usqp=CAU';
    console.log("src :" + event.target.src);
  }

  setDefaultPic() {
     this.pic = this.noPic;

  }
}
