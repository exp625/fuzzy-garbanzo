import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public pauseButtonFlag = false;

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

}
