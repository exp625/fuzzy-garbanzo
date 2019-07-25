import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JamSessionComponent} from './components/jam-session/jam-session.component';
import {LandingpageComponent} from './components/landingpage/landingpage.component';

const routes: Routes = [
  {
    path: 'session',
    component: JamSessionComponent
  },
  {
    path: 'landingpage',
    component: LandingpageComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
