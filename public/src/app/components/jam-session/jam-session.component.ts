import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jam-session',
  templateUrl: './jam-session.component.html',
  styleUrls: ['./jam-session.component.scss']
})
export class JamSessionComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  private userStatus = {'user': 'New', 'label': ''};

  ngOnInit() {
    this.auth.getUserStatus().subscribe(value => {
      this.userStatus = value;
      if (!(this.userStatus.user === 'Guest' || this.userStatus.user === 'Host') || this.userStatus.label.length !== 5) {
        this.router.navigate(['/']);
      }
    });
  }

}
