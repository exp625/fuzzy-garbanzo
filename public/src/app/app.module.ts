  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { CallbackComponent } from './components/callback/callback.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
  import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CallbackComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpotifyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
