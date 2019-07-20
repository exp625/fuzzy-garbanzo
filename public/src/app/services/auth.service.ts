import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  spotifyLogin() {
    return this.http.get(this.authUrl + '/login/', {headers: new HttpHeaders({'Access-Control-Allow-Origin': 'https://accounts.spotify.com'})});
  }





}
