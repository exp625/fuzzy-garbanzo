import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {

  private authToken: string = null;
  private clientId = '18e9faedbb4b4e6c857a891d10a6ead3';
  private redirect = 'http://localhost:4200/callback';
  private scope = 'user-read-private user-read-email user-modify-playback-state';
  private spotifyConnectApi = 'https://api.spotify.com/v1/me/player';

  constructor(private http: HttpClient) {
    if (!sessionStorage.getItem('authToken')) {
      sessionStorage.setItem('authToken', 'temp');
      this.login();
    }
    this.authToken = sessionStorage.getItem('authToken');
  }


  login() {
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=' + this.clientId
      + '&redirect_uri=' + this.redirect
      + '&scope=' + this.scope
      + '&response_type=token';
  }

  setAuthToken(authToken: string) {

    this.authToken = authToken;
    sessionStorage.setItem('authToken', this.authToken);
  }

  getAuthToken() {
    return this.authToken;
  }

  pause() {
    const payload = {'device_id': ''};
    return this.http.put(this.spotifyConnectApi + '/pause', payload, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authToken})});
  }

  play() {
    const payload = {'device_id': ''};
    return this.http.put(this.spotifyConnectApi + '/play', payload, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authToken})});
  }

}
