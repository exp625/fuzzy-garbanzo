  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/party-queue/main.component';

import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import {AuthService} from './services/auth.service';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import {FormsModule} from '@angular/forms';
import { JamSessionComponent } from './components/jam-session/jam-session.component';
import { JamSessionSidebarComponent } from './components/jam-session-sidebar/jam-session-sidebar.component';
import { JamSessionQueueComponent } from './components/jam-session-queue/jam-session-queue.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingpageComponent,
    JamSessionComponent,
    JamSessionSidebarComponent,
    JamSessionQueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [SpotifyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
