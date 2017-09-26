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
    new User('linux', 'Linux rendszermernok', ''),
    new User('aspnet', 'Asp Net fejleszto', ''),
    new User('bitanacs', 'BI Tanacsado', ''),
    new User('java', 'Java fejleszto', ''),
    new User('airline', 'Airline rendszermernok', ''),
    new User('desktop', 'IT Desktop', ''),
    new User('it-erp', 'ERP Alkalmazas Rendszermernok', ''),
    new User('helpdesk', 'IT Helpdesk', ''),
    new User('m3d', 'M3D Epiteszemrnok', '')
    ];
}

