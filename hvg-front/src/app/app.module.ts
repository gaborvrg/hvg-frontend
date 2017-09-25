import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LinuxComponent } from './jobs/linux.component';
import { AspnetComponent } from './jobs/aspnet.component';
import { BitanacsComponent } from './jobs/bitanacs.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    LinuxComponent,
    AspnetComponent,
    BitanacsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
