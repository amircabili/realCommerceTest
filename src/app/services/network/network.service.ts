import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';

const SERVER_URLS = {
  prod: 'assets/data/',
  dev: 'assets/data/',
  stub: 'assets/data/',
};

let BASE_URL = '';

@Injectable({providedIn: 'root'})
export class NetworkService {

  constructor(
    private http: HttpClient
  ) {
    // for development change here the server url
    BASE_URL = SERVER_URLS[environment.type];
  }

  getData(Url, parm) {
    const promise = new Promise((resolve, reject) => {
      const fullUrl: string = BASE_URL + Url;
      const config = {
        // headers: new HttpHeaders({
        // }),
        params : parm
      };
      this.http.get(fullUrl, config)
        .subscribe(data => {resolve(data); }, error => {reject(error); });
    });
    return promise;
  }


  postData(Url, parm, parms) {
    const promise = new Promise((resolve, reject) => {
      const fullUrl: string = BASE_URL + Url;
      const config = {
        // headers: new HttpHeaders({
        // }),
        params : parms
      };
      if (fullUrl.indexOf('stubs') !== -1) {
        this.http.get(fullUrl, config)
          .subscribe(data => {resolve(data); }, error => {reject(error); });
      } else {
        this.http.post(fullUrl, parm , config)
          .subscribe(data => {resolve(data); }, error => {reject(error); });
      }
    });
    return promise;
  }

  updateData(Url, parm, parms) {
    const promise = new Promise((resolve, reject) => {
      const fullUrl: string = BASE_URL + Url;
      const config = {
        // headers: new HttpHeaders({
        // }),
        params : parms
      };
      if (fullUrl.indexOf('stubs') !== -1) {
        this.http.get(fullUrl, config)
          .subscribe(data => {resolve(data); }, error => {reject(error); });
      } else {
        this.http.put(fullUrl, parm , config)
          .subscribe(data => {resolve(data); }, error => {reject(error); });
      }
    });
    return promise;
  }


}
