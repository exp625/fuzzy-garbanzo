import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import {CallbackComponent} from './components/callback/callback.component';
import {LandingpageComponent} from './components/landingpage/landingpage.component';
import {LoginGuard} from './services/login.guard';

const routes: Routes = [
  {
    path: 'landingpage',
    component: LandingpageComponent
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    redirectTo: 'landingpage'
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
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
