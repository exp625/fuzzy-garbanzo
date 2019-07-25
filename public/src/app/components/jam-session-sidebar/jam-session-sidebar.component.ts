import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-jam-session-sidebar',
  templateUrl: './jam-session-sidebar.component.html',
  styleUrls: ['./jam-session-sidebar.component.scss']
})
export class JamSessionSidebarComponent implements OnInit {

  private avaliableDevices = [];
  private selectedDevice = '';
  private ipVoting = false;

  @Input() userStatus;
  constructor(private auth: AuthService, private spotify: SpotifyService) { }



  ngOnInit() {
    this.spotify.getDevices().subscribe(value => {
      this.avaliableDevices = value.devices;
    });
  }

  saveSettings() {
    console.log({'device': this.selectedDevice, 'ip': this.ipVoting});
    this.spotify.saveSettings({'device': this.selectedDevice, 'ip': this.ipVoting}).subscribe();
  }

}
