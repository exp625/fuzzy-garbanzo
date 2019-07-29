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

  public avaliableDevices = [];
  public selectedDevice = '';

  public avaliablePlaylists: SpotifyPlaylistSimplified[] = [];
  public selectedPlaylist: string = undefined;

  public partyName = '';
  public ipVoting = false;

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
      console.log(value);
      this.partyName = value.display_name;
    });
  }

  saveSettings() {
    console.log({'device': this.selectedDevice, 'ip': this.ipVoting});
    this.spotify.saveSettings({'device': this.selectedDevice, 'ip': this.ipVoting}).subscribe();
    this.nameParty();
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

  nameParty() {
    this.spotify.setName(this.partyName).subscribe(value => {
      this.partyName = value.display_name;
    });
  }

  tv() {
    this.router.navigate(['/tv']);
  }

}
