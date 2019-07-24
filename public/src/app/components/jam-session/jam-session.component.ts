import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-jam-session',
  templateUrl: './jam-session.component.html',
  styleUrls: ['./jam-session.component.scss']
})
export class JamSessionComponent implements OnInit {

  constructor(private auth: AuthService) { }

  private userStatus = {'user': 'New', 'label': ''};

  ngOnInit() {
    this.auth.getUserStatus().subscribe(value => {
      this.userStatus = value;
    });
  }

}
