import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders} from '@angular/common/http';
import {SpotifySong} from './spotify-song';

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {

  private authToken: string = null;
  private clientId = '18e9faedbb4b4e6c857a891d10a6ead3';
  private redirect = 'http://localhost:4200/callback';
  private scope = 'user-read-private user-read-email user-modify-playback-state';
  private spotifyConnectApi = 'https://api.spotify.com/v1/me/player';
  private spotifyWebApi = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {
    if (!sessionStorage.getItem('authToken')) {
      sessionStorage.setItem('authToken', 'temp');
      this.login();
    }
    this.authToken = sessionStorage.getItem('authToken');
  }


  login () {
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=' + this.clientId
      + '&redirect_uri=' + this.redirect
      + '&scope=' + this.scope
      + '&response_type=token';
  }

  setAuthToken (authToken: string) {

    this.authToken = authToken;
    sessionStorage.setItem('authToken', this.authToken);
  }

  getAuthToken () {
    return this.authToken;
  }

  pause () {
    const payload = {'device_id': ''};
    return this.http.put(this.spotifyConnectApi + '/pause', payload, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authToken})});
  }

  play () {
    const payload = {'device_id': ''};
    return this.http.put(this.spotifyConnectApi + '/play', payload, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authToken})});
  }

  spotifySearch(text: string) {
    const payload = {'q': text + '*', 'type': 'track', 'market': 'DE'};
    return this.http.get<SpotifySong>(this.spotifyWebApi + '/search' + this.jsonToQueryString(payload), {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authToken})});
  }

  playSong(song: SpotifySong) {
    const payload = {'uris': [song.uri], 'device_id': ''};
    return this.http.put(this.spotifyConnectApi + '/play' , payload, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authToken})});
  }

  jsonToQueryString(json) {
    return '?' +
      Object.keys(json).map(function(key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(json[key]);
      }).join('&');
  }

}
