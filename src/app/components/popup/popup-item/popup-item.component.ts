import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GlobalFunctionsService} from "../../../services/globalFunctions/global-functions.service";

@Component({
  selector: 'app-popup-item',
  templateUrl: './popup-item.component.html',
  styleUrls: ['./popup-item.component.scss']
})
export class PopupItemComponent implements OnInit {
  public item;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    public globalFunctionsService: GlobalFunctionsService
  ) { }

  ngOnInit(): void {
    this.item = this.data;
  }

  finishFunction(): void {
    this.dialogRef.close();
  }


  LocalDate(date): string {
    const value = date;
    const year = value.substring(0,4);
    const month  = value.substring(4,6);
    const day = value.substring(6,9);
    const str =  day + "-" + month + "-" + year ;
    return str;
  }

  onImgError($event: ErrorEvent) {

  }

  updateItem(item: any) {
    this.globalFunctionsService.updateItem(item);
    this.dialogRef.close();
  }
}
