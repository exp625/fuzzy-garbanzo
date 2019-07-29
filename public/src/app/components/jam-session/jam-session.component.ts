import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-jam-session',
  templateUrl: './jam-session.component.html',
  styleUrls: ['./jam-session.component.scss']
})
export class JamSessionComponent implements OnInit {

  constructor(private auth: AuthService, private spotify: SpotifyService, private router: Router, private route: ActivatedRoute) { }

  public userStatus = {'user': 'New', 'label': ''};

  ngOnInit() {
    this.auth.getUserStatus().subscribe(value => {
      this.userStatus = value;
      if (!(this.userStatus.user === 'Guest' || this.userStatus.user === 'Host') || this.userStatus.label.length !== 5) {
        if (this.route.snapshot.paramMap.get('jamlabel')) {
          this.spotify.joinParty(this.route.snapshot.paramMap.get('jamlabel')).subscribe( value1 => {
            if (value1.label) {
              this.ngOnInit();
            } else {
              this.router.navigate(['/']);
            }
          });
        } else {
          this.router.navigate(['/']);
        }
      }
    });
  }

}
