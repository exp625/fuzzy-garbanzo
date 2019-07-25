import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {SpotifyService} from '../../services/spotify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  public userStatus = 'Undefined';
  public userLabel = 'Undefined';

  public labelField = '';

  constructor(private auth: AuthService, private spotify: SpotifyService, private router: Router) { }


  ngOnInit() {
    this.auth.getUserStatus().subscribe(value => {
      if (value.user !== 'New') {
        if (value.user === 'Guest') {
          this.userStatus = 'Guest';
          this.userLabel = value.label;
        }
        if (value.user === 'Host') {
          this.userStatus = 'Host';
          this.userLabel = value.label;
        }
      } else {
        this.userStatus = 'New';
      }
      this.checkForRedirect();
    });
  }

  checkForRedirect() {
    if (this.userStatus === 'Host' || this.userStatus === 'Guest' && this.userLabel !== '') {
      this.router.navigate(['/' + this.userLabel]);
    }
  }

  login() {
    // Does not work due to CORS
    // this.auth.spotifyLogin().subscribe();

    this.auth.spotifyLogin().subscribe(value => {
      window.location.href = value.url;
    });
  }

  create() {
    this.spotify.createNewParty().subscribe(value => {
      this.auth.getUserStatus().subscribe(value2 => {
        this.userStatus = value2.user;
        this.userLabel = value2.label;
        this.checkForRedirect();
      });
    });
  }

  join() {
    this.spotify.joinParty(this.labelField).subscribe(value => {
      this.auth.getUserStatus().subscribe(value2 => {
        this.userStatus = value2.user;
        this.userLabel = value2.label;
        this.checkForRedirect();
      });
    });
  }


}
