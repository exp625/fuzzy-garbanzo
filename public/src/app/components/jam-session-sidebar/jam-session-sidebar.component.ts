import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {SpotifyService} from '../../services/spotify.service';
import {Router} from '@angular/router';
import {SpotifyPlaylistFull} from '../../classes/spotify-playlist-full';
import {SpotifyPlaylistSimplified} from '../../classes/spotify-playlist-simplified';

@Component({
  selector: 'app-jam-session-sidebar',
  templateUrl: './jam-session-sidebar.component.html',
  styleUrls: ['./jam-session-sidebar.component.scss']
})
export class JamSessionSidebarComponent implements OnInit {

  private avaliableDevices = [];
  private selectedDevice = '';

  private avaliablePlaylists: SpotifyPlaylistSimplified[] = [];
  private selectedPlaylist: string = undefined;

  private partyName = '';
  private ipVoting = false;

  @Input() userStatus;
  constructor(private auth: AuthService, private spotify: SpotifyService, private router: Router) { }



  ngOnInit() {
    this.spotify.getDevices().subscribe(value => {
      this.avaliableDevices = value.devices;
      this.selectedDevice = this.avaliableDevices[0].id;
    });

    this.spotify.getPlaylists().subscribe(value => {
      this.avaliablePlaylists = value.items as SpotifyPlaylistSimplified[];
      this.selectedPlaylist = this.avaliablePlaylists[0].id;
    });

    this.spotify.getPartyInfo().subscribe(value => {
      this.partyName = value.display_name + '\'s Jam Session';
    });
  }

  saveSettings() {
    console.log({'device': this.selectedDevice, 'ip': this.ipVoting});
    this.spotify.saveSettings({'device': this.selectedDevice, 'ip': this.ipVoting}).subscribe();
  }

  leave() {
    this.spotify.leave().subscribe( value => {
      if (value.Success) {
        this.router.navigate(['/']);
      }
    });
  }

  addPlaylist() {
    console.log(this.selectedPlaylist);
    this.spotify.addPlaylist(this.selectedPlaylist).subscribe();
  }

}
