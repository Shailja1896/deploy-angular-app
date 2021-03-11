import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private spinner: NgxSpinnerService, private http: HttpClient,
  ) { }

  getHttpRequest(url: string, param?: any, errorMsg?: boolean) {
    try {
      return new Observable((observer) => {
        let params = param ? new HttpParams().set('userId', param) : new HttpParams();
        this.http.get(url, { params: params })
          .subscribe(res => {
            console.log('get res', res);
            observer.next(res);
            observer.complete();
          }, error => {
            console.log('error : ', error);
            observer.error(error);
            observer.complete();
          });
      });
    } catch (error) {
      this.spinner.hide();
      console.log(error);
      return;
    }
  }

  postHttpRequest(url: string, param: any) {
    try {
      return new Observable((observer) => {
        this.http.post(url, param)
          .subscribe(res => {
            setTimeout(() => {
              this.spinner.hide();
            }, 100);
            observer.next(res);
            observer.complete();
          }, (error: any) => {
            observer.error(error);
            observer.complete();
          });
      });
    } catch (error) {
      setTimeout(() => {
        this.spinner.hide();
      }, 100);
      console.log(error);
      return;
    }
  }
}
