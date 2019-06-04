import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import {CallbackComponent} from './components/callback/callback.component';
import {LandingpageComponent} from './components/landingpage/landingpage.component';

const routes: Routes = [
  {
    path: 'landingpage',
    component: LandingpageComponent
  },
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full'
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: 'landingpage'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
