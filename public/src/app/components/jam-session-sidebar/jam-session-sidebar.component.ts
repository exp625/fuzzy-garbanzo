import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-jam-session-sidebar',
  templateUrl: './jam-session-sidebar.component.html',
  styleUrls: ['./jam-session-sidebar.component.scss']
})
export class JamSessionSidebarComponent implements OnInit {

  @Input() userStatus;
  constructor(private auth: AuthService) { }



  ngOnInit() {

  }

}
