import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders} from '@angular/common/http';
import {SpotifyTrackFull} from '../classes/spotify-track-full';

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {

  private authToken: string = null;
  private redirect = 'http://localhost:3000/callback';
  private scope = 'user-read-private user-read-email user-modify-playback-state';
  private spotifyConnectApi = 'https://api.spotify.com/v1/me/player';
  private spotifyWebApi = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {
  }


  login() {
  }

  createNewParty() {
    return this.http.get<any>('/api/party/create');
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

  spotifySearch(text: string) {
    const payload = {'q': text + '*', 'type': 'track', 'market': 'DE'};
    return this.http.get<SpotifyTrackFull>(this.spotifyWebApi + '/search' + this.jsonToQueryString(payload), {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authToken})});
  }

  playSong(song: SpotifyTrackFull) {
    const payload = {'uris': [song.uri], 'device_id': ''};
    return this.http.put(this.spotifyConnectApi + '/play', payload, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authToken})});
  }

  jsonToQueryString(json) {
    return '?' +
      Object.keys(json).map(function (key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(json[key]);
      }).join('&');
  }

}
