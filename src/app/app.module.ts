import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GapiSession } from './gapi.session.service';

import { AppComponent } from './app.component';

import { initGapi } from './file.config';
import { AppRepository } from './repository.service';
import { UserRepository } from './user.repository.service';
import { FileRepository } from './file.repository.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    GapiSession,
    AppRepository,
    UserRepository,
    FileRepository,
    { provide: APP_INITIALIZER, useFactory: initGapi, deps: [GapiSession], multi: true }
  ]
})
export class AppModule { }
