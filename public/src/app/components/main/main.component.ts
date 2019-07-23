import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';
import {SpotifyTrackFull} from '../../classes/spotify-track-full';
import {SpotifyPaging} from "../../classes/spotify-paging";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public pauseButtonFlag = true;

  public currentSong: SpotifyTrackFull = undefined;
  public songList: SpotifyTrackFull[] = [];
  public onSearch = false;
  public spotifySearchText = '';

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {

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
    this.spotify.spotifySearch(e.target.value).subscribe(value => {
      console.log(value.tracks);
      const page = value.tracks as SpotifyPaging;
      console.log(page);
      this.songList = page.items as SpotifyTrackFull[];
      console.log(this.songList);
    });
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
