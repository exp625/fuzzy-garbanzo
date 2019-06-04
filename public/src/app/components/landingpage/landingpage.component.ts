import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  public userStatus = 'New';
  public partyId: number = undefined;

  constructor(private auth: AuthService) { }


  ngOnInit() {
    this.auth.getUserStatus().subscribe(value => {
      if (value.User !== 'New') {
        if (value.User === 'Guest') {
          this.userStatus = 'Guest';
          this.partyId = value.PartyID;
        }
        if (value.User === 'Host') {
          this.userStatus = 'Host';
          this.partyId = value.PartyID;
        }
      } else {
        this.userStatus = 'New';
      }
    });
  }


}
