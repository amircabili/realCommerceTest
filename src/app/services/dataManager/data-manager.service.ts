import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(
    private networkService: NetworkService
  ) {
  }

  getGalleryData(parm) {
    const promise = new Promise((resolve, reject) => {
      const url = 'table/gallery';
      const parms = '';
      this.networkService.getData(url, parms).then((response) => {
        resolve(response);
      })
        .catch((error) => {
          reject(error);
        });
    });
    return promise;
  }

  updateItemyData(parm) {
    const promise = new Promise((resolve, reject) => {
      const url = 'table/gallery';
      // @ts-ignore
      this.networkService.updateData(url, parm).then((response) => {
        resolve(response);
      })
        .catch((error) => {
          reject(error);
        });
    });
    return promise;
  }




}
