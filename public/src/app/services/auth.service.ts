import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = '/auth';

  constructor(private http: HttpClient) {

  }

  getUserStatus() {
    return this.http.get<any>(this.authUrl + '/status/');
  }





}
