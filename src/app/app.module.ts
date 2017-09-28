import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LinuxComponent } from './jobs/linux.component';
import { AspnetComponent } from './jobs/aspnet.component';
import { BitanacsComponent } from './jobs/bitanacs.component';
import { HomeComponent } from './home.component';
import { JavaComponent } from './jobs/java.component';
import { AirlineComponent } from './jobs/airline.component';
import { DesktopComponent } from './jobs/desktop.component';
import { ItErpComponent } from './jobs/iterp.component';
import { HelpdeskComponent } from './jobs/helpdesk.component';
import { M3dkComponent } from './jobs/m3d.component';
import { MasajanlatComponent } from './jobs/masajanlat.component';
import { SignupComponent } from './singnup.component';
import { PageidService } from './pageId.service';
import { HttpService } from './http.service';
import { AdminComponent } from './admin.component';
import { SideComponent } from './jobs/side.component';

@NgModule({
  declarations: [
    AppComponent,
    LinuxComponent,
    AspnetComponent,
    BitanacsComponent,
    HomeComponent,
    JavaComponent,
    AirlineComponent,
    DesktopComponent,
    ItErpComponent,
    HelpdeskComponent,
    M3dkComponent,
    MasajanlatComponent,
    SignupComponent,
    AdminComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [PageidService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
