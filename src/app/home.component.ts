import { Component } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'app';

  jobTitle = [
    new User('linux', 'LINUX RENDSZERMÉRNÖK', ''),
    new User('aspnet', 'ASP.NET FEJLESZTŐ', ''),
    new User('bitanacs', 'BI TANÁCSADÓ', ''),
    new User('java', 'JAVA FEJLESZTŐ', ''),
    new User('airline', 'AIRLINE RENDSZERMÉRNÖK', ''),
    new User('desktop', 'IT ESKTOP MUNKATÁRS', ''),
    new User('iterp', 'ERP ALKALMAZÁS RENDSZERMÉRNÖK', ''),
    new User('helpdesk', 'IT HELPDESK MUNKATÁRS', ''),
    new User('m3d', 'M3D ÉPÍTÉSZMÉRNÖK', ''),
    new User('masajanlat', 'MÁS AJÁNLATOT KÉREK', '')
    ];
}

