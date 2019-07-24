import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';
import {SpotifyTrackFull} from '../../classes/spotify-track-full';
import {SpotifyPaging} from '../../classes/spotify-paging';
import {QueueSong} from '../../classes/queue-song';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public pauseButtonFlag = true;

  public currentSong: SpotifyTrackFull = undefined;
  public songList: QueueSong[] = [];
  public partyQueue: QueueSong[] = [];
  public onSearch = false;
  public spotifySearchText = '';

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    this.getQueue();
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
    if (e.target.value && e.target.value !== '') {
      this.onSearch = true;
      this.spotify.spotifySearch(e.target.value).subscribe(value => {
        this.spotify.getQueue().subscribe( queue => {
          this.partyQueue = queue;
          const page = value.tracks as SpotifyPaging;
          const songs = page.items as SpotifyTrackFull[];
          this.songList = songs.map(song => {
            let votes = 0;
            queue.forEach(q => {
              if (q.spotifyTrackFull.uri === song.uri) {
                votes = q.votes;
              }
            });
            return new QueueSong(song, votes);
          }).sort((a, b) => b.spotifyTrackFull.popularity - a.spotifyTrackFull.popularity);
        });
      });
    } else {
      this.onSearch = false;
      this.getQueue();
    }
  }

  getQueue() {
    this.spotify.getQueue().subscribe( value => {
      console.log(value);
      this.songList = value;
      this.partyQueue = value;
    });
  }

  clear() {
    this.onSearch = false;
    this.songList = [];
    document.getElementById('spotifySearchText').innerText = '';
    this.getQueue();
  }
  /*
  playSong(song: SpotifyTrackFull) {
    console.log(song.uri);
    this.spotify.playSong(song).subscribe(value => console.log(value));
  }
  */

  playSong(song: QueueSong) {
    this.spotify.vote(song.spotifyTrackFull).subscribe(value => {
      this.partyQueue = value;
      if (!this.onSearch) {
        this.songList = this.partyQueue;
      } else {
        this.songList = this.songList.map(s => {
          this.partyQueue.forEach(q => {
            if (q.spotifyTrackFull.uri === s.spotifyTrackFull.uri) {
              s.votes = q.votes;
            }
          });
          return s;
        }).sort((a, b) => b.spotifyTrackFull.popularity - a.spotifyTrackFull.popularity);
      }
    });
  }

}
