import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {

  private authToken: string = null;
  private clientId = '18e9faedbb4b4e6c857a891d10a6ead3';
  private redirect = 'localhost:4200/main';

  constructor(private http: HttpClient) { }


  login () {
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=' + this.clientId + '&redirect_uri=' + this.redirect;
  }

}
