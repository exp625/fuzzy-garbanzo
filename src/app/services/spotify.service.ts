import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders} from '@angular/common/http';
import {SpotifyTrackFull} from '../classes/spotify-track-full';
import {SpotifyPaging} from "../classes/spotify-paging";
import {QueueSong} from '../classes/queue-song';

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {

  private authToken: string = null;
  private scope = 'user-read-private user-read-email user-modify-playback-state';
  private uri = '/api/v1/spotify';
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
    return this.http.get<any>('/api/v1/party/create');
  }

  leave() {
    return this.http.get<any>('/api/v1/party/leave');
  }

  joinParty(label: string) {
    const payload = {'label': label};
    return this.http.put<any>('/api/v1/party/join', payload, this.headers);
  }

  getPartyInfo() {
    return this.http.get<any>('/api/v1/party/');
  }

  getQueue() {
    return this.http.get<QueueSong[]>('/api/v1/queue/');
  }

  vote(spotifyTrackFull: SpotifyTrackFull) {
    return this.http.put<QueueSong[]>('/api/v1/queue/vote', {song: spotifyTrackFull}, this.headers);
  }

  getDevices() {
    return this.http.get<any>('/api/v1/spotify/devices');
  }

  addPlaylist(uri) {
    return this.http.put<any>('/api/v1/queue/playlist', {'uri': uri}, this.headers);
  }

  getPlaylists() {
    return this.http.get<any>('/api/v1/spotify/playlist');
  }

  saveSettings(payload) {
    return this.http.put('/api/v1/party/', payload, this.headers);
  }

  setPlayback(payload) {
    return this.http.put('/api/v1/party/playback', payload, this.headers);
  }

  getState() {
    return this.http.get<any>('/api/v1/party/playback');
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
