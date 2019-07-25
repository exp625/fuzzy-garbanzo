import {Component, Input, OnInit} from '@angular/core';
import {SpotifyTrackFull} from '../../classes/spotify-track-full';
import {QueueSong} from '../../classes/queue-song';
import {SpotifyService} from '../../services/spotify.service';
import {SpotifyPaging} from '../../classes/spotify-paging';
import {Socket} from 'ngx-socket-io';


@Component({
  selector: 'app-jam-session-queue',
  templateUrl: './jam-session-queue.component.html',
  styleUrls: ['./jam-session-queue.component.scss']
})
export class JamSessionQueueComponent implements OnInit {

  @Input() userStatus;

  public pauseButtonFlag = true;
  public currentSong: QueueSong = undefined;
  public playbackState = undefined;
  public songList: QueueSong[] = [];
  public partyQueue: QueueSong[] = [];
  public onSearch = false;
  public spotifySearchText = '';

  constructor(private spotify: SpotifyService, private socket: Socket) { }

  ngOnInit() {
    this.getQueue();
    this.spotify.getState().subscribe(state => {
      console.log(state.currentSong);
      console.log(state.state);
      this.currentSong = state.currentSong;
      this.playbackState = state.state;
    });
    this.socket.connect();
  }

  playback (state: boolean) {
    this.spotify.setPlayback({'playback': state}).subscribe();
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

  vote(song: QueueSong) {
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
