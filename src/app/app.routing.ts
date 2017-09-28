import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LinuxComponent } from './jobs/linux.component';
import { AspnetComponent } from './jobs/aspnet.component';
import { BitanacsComponent } from './jobs/bitanacs.component';
import { AppComponent } from './app.component';
import { JavaComponent } from './jobs/java.component';
import { AirlineComponent } from './jobs/airline.component';
import { DesktopComponent } from './jobs/desktop.component';
import { ItErpComponent } from './jobs/iterp.component';
import { HelpdeskComponent } from './jobs/helpdesk.component';
import { M3dkComponent } from './jobs/m3d.component';
import { MasajanlatComponent } from './jobs/masajanlat.component';
import { AdminComponent } from './admin.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'linux', component: LinuxComponent },
    { path: 'aspnet', component: AspnetComponent },
    { path: 'bitanacs', component: BitanacsComponent },
    { path: 'java', component: JavaComponent },
    { path: 'airline', component: AirlineComponent },
    { path: 'desktop', component: DesktopComponent },
    { path: 'iterp', component: ItErpComponent },
    { path: 'helpdesk', component: HelpdeskComponent },
    { path: 'm3d', component: M3dkComponent },
    { path: 'masajanlat', component: MasajanlatComponent },
    { path: '160c6ff9e553b6556dddc408ae0b38ed', component: AdminComponent },
    { path: '**', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
