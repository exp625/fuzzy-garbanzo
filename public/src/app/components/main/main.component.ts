import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';
import {SpotifySong} from '../../classes/spotify-song';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public pauseButtonFlag = false;

  public currentSong: SpotifySong = undefined;
  public songList: SpotifySong[] = [];
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
    this.onSearch = true;
    this.spotifySearchText = e.target.value;
    if (this.spotifySearchText !== '') {
      this.spotify.spotifySearch(this.spotifySearchText).subscribe(value => {
        this.songList = [];
        value.tracks.items.forEach(song => {
          this.songList.push(new SpotifySong(song.name, song.popularity, song.uri, 0, null));
        });
        this.songList.sort((a, b) => b.popularity - a.popularity);


      });
    } else {
      this.clear();
    }
  }

  clear() {
    this.onSearch = false;
    this.songList = [];
    document.getElementById('spotifySearchText').innerText = '';
  }

  playSong(song: SpotifySong) {
    console.log(song.uri);
    this.spotify.playSong(song).subscribe(value => console.log(value));
  }

}
