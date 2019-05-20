import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';

import {SpotifyService} from './spotify.service';
import {HttpClientModule} from '@angular/common/http';
import {CallbackComponent} from './callback/callback.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
