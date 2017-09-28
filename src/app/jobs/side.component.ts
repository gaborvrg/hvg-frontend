import { Component } from '@angular/core';

import { User } from '../user.model';
import { PageidService } from '../pageId.service';

@Component({
    selector: 'app-side',
    templateUrl: './side.component.html',
    styleUrls: ['./side.component.css']
})
export class SideComponent {

    jobTitle = [
        new User('linux', 'LINUX RENDSZERMÉRNÖK', 'LINUX_RENDSZERMERNOK'),
        new User('aspnet', 'ASP.NET FEJLESZTŐ', 'ASP_NET_FEJLESZTO'),
        new User('bitanacs', 'BI TANÁCSADÓ', 'BI_TANACSADO'),
        new User('java', 'JAVA FEJLESZTŐ', 'JAVA_FEJLESZTO'),
        new User('airline', 'AIRLINE RENDSZERMÉRNÖK', 'AIRLINE_RENDSZERMERNOK'),
        new User('desktop', 'IT DESKTOP MUNKATÁRS', 'IT_DESKTOP'),
        new User('iterp', 'ERP ALKALMAZÁS RENDSZERMÉRNÖK', 'ERP_ALK_RENDSZERMERNOK'),
        new User('helpdesk', 'IT HELPDESK MUNKATÁRS', 'IT_HELPDESK'),
        new User('m3d', 'M3D ÉPÍTÉSZMÉRNÖK', 'M3D_EPITESZMERNOK'),
        new User('masajanlat', 'MÁS AJÁNLATOT KÉREK', 'MAS_AJANLAT')
        ];

    constructor(public pageIdService: PageidService) { }

    getId(param) {
        this.pageIdService.pageObj = param;
    }
}
