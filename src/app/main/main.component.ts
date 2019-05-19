import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {

  }

  test () {
    this.spotify.login();
  }

}
