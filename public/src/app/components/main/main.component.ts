import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';
import {SpotifyTrackFull} from '../../classes/spotify-track-full';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public pauseButtonFlag = false;

  public currentSong: SpotifyTrackFull = undefined;
  public songList: SpotifyTrackFull[] = [];
  public onSearch = false;
  public spotifySearchText = '';

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    if (this.spotify.getAuthToken()) {
      this.pauseButtonFlag = true;
    }
  }

  test () {
    this.spotify.login();
  }

  pause () {
    this.spotify.pause().subscribe();
  }

  play () {
    this.spotify.play().subscribe();
  }

  spotifySearch(e) {

  }

  clear() {
    this.onSearch = false;
    this.songList = [];
    document.getElementById('spotifySearchText').innerText = '';
  }

  playSong(song: SpotifyTrackFull) {
    console.log(song.uri);
    this.spotify.playSong(song).subscribe(value => console.log(value));
  }

}
