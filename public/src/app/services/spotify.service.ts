import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders} from '@angular/common/http';
import {SpotifyTrackFull} from '../classes/spotify-track-full';
import {SpotifyPaging} from "../classes/spotify-paging";

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {

  private authToken: string = null;
  private redirect = 'http://localhost:3000/callback';
  private scope = 'user-read-private user-read-email user-modify-playback-state';
  private uri = '/sapi';
  private spotifyWebApi = 'https://api.spotify.com/v1';

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }


  login() {
  }

  createNewParty() {
    return this.http.get<any>('/api/party/create');
  }

  joinParty(label: string) {
    const payload = {'label': label};
    return this.http.put<any>('/api/party/join', payload, this.headers);
  }

  setAuthToken(authToken: string) {

    this.authToken = authToken;
    sessionStorage.setItem('authToken', this.authToken);
  }

  getAuthToken() {
    return this.authToken;
  }

  pause() {
    return this.http.get(this.uri + '/pause');
  }

  play() {
    return this.http.put(this.uri + '/play', undefined);
  }

  spotifySearch(text: string) {
    const payload = {'text': text};
    return this.http.put<any>(this.uri + '/search', payload, this.headers);
  }

  playSong(song: SpotifyTrackFull) {
    return this.http.put(this.uri + '/play', song, this.headers);
  }



}
