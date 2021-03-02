import { Component, OnInit } from '@angular/core';
import {GlobalFunctionsService} from "../../services/globalFunctions/global-functions.service";

@Component({
  selector: 'app-main-aside',
  templateUrl: './main-aside.component.html',
  styleUrls: ['./main-aside.component.scss']
})
export class MainAsideComponent implements OnInit {
public galleryData = this.globalFunctionsService.gallery;
  constructor(
    public globalFunctionsService : GlobalFunctionsService
    ) {
  }

  ngOnInit(): void {

  }

  getAllMovies() {
    this.globalFunctionsService.getGallery('movies');
  }

  getAllGames() {
    this.globalFunctionsService.getGallery('game');
  }

  getAllSeries() {
    this.globalFunctionsService.getGallery('series');
  }

  // applyChangeView() {
  //   if(this.globalFunctionsService.applyChangeView){
  //     this.globalFunctionsService.applyChangeView = !this.globalFunctionsService.applyChangeView;
  //   } else {!this.globalFunctionsService.applyChangeView = this.globalFunctionsService.applyChangeView;}
  // }
}
