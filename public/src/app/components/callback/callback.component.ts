import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private spotify: SpotifyService, private router: Router) { }

  ngOnInit() {
    const fragment = new URLSearchParams(this.route.snapshot.fragment);
    this.spotify.setAuthToken(fragment.get('access_token'));
    this.router.navigate(['/main']);
  }

}
