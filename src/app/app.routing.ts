import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LinuxComponent } from './jobs/linux.component';
import { AspnetComponent } from './jobs/aspnet.component';
import { BitanacsComponent } from './jobs/bitanacs.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'linux', component: LinuxComponent },
    { path: 'aspnet', component: AspnetComponent },
    { path: 'bitanacs', component: BitanacsComponent },
    { path: '**', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
