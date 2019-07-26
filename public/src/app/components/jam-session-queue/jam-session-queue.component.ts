import {Component, Input, OnInit} from '@angular/core';
import {SpotifyTrackFull} from '../../classes/spotify-track-full';
import {QueueSong} from '../../classes/queue-song';
import {SpotifyService} from '../../services/spotify.service';
import {SpotifyPaging} from '../../classes/spotify-paging';
import {Socket} from 'ngx-socket-io';
import {Router} from '@angular/router';


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

  constructor(private spotify: SpotifyService, private socket: Socket, private router: Router) { }

  ngOnInit() {
    this.getQueue();
    this.spotify.getState().subscribe(state => {
      console.log(state.currentSong);
      console.log(state.state);
      this.currentSong = state.currentSong;
      this.playbackState = state.state;
    });
    this.socket.fromEvent('test').subscribe(value => {
      console.log('Socket Test');
    });
    this.socket.fromEvent<QueueSong[]>('queue').subscribe(queue => {
      this.partyQueue = queue.map( (q) => {
        let voted = false;
        this.partyQueue.forEach( value => {
          if (value.spotifyTrackFull.uri === q.spotifyTrackFull.uri) {
            voted = value.voted;
          }
        });
        return new QueueSong(q.spotifyTrackFull, q.votes, voted);
      });
      if (!this.onSearch) {
        this.songList = this.partyQueue;
      }
    });

    this.socket.fromEvent<any>('playback').subscribe( playback => {
      console.log('Playback Socket');
      this.playbackState = playback.state;
      this.currentSong = playback.currentSong;
    });
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
            let voted = false;
            queue.forEach(q => {
              if (q.spotifyTrackFull.uri === song.uri) {
                votes = q.votes;
                voted = q.voted
              }
            });
            return new QueueSong(song, votes, voted);
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

  leave() {
    this.spotify.leave().subscribe( value => {
      if (value.Success) {
        this.router.navigate(['/']);
      }
    });
  }


}
