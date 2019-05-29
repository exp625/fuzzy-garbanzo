import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import {CallbackComponent} from './components/callback/callback.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
