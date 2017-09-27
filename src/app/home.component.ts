import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './http.service';

import { PageidService } from './pageId.service';
import { User } from './user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'app';
  myForm: FormGroup;
  // jobId: string;
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

    applieadJobs = [];
    validForm;
    formCanBeVisible = false;

    selectedObj = {
      "LINUX_RENDSZERMERNOK": false,
      "ASP_NET_FEJLESZTO": false,
      "BI_TANACSADO": false,
      "JAVA_FEJLESZTO": false,
      "AIRLINE_RENDSZERMERNOK": false,
      "IT_DESKTOP": false,
      "ERP_ALK_RENDSZERMERNOK": false,
      "IT_HELPDESK": false,
      "M3D_EPITESZMERNOK": false,
      "MAS_AJANLAT": false,
    };

    constructor(public pageIdService: PageidService, private httpService: HttpService) {}

    ngOnInit() {
      this.myForm = new FormGroup({
          name: new FormControl(null, Validators.required),
          email: new FormControl(null, [
              Validators.required,
              Validators.email
          ])
      });
    }

    getId(param) {
      this.pageIdService.pageObj = param;
      // console.log(param);
    }

    checkedRoles(name){
      if(this.selectedObj[name] === false){
        this.selectedObj[name] = true;
      } else if (this.selectedObj[name] === true) {
        this.selectedObj[name] = false;;        
      }
      this.appliedRolesValidator();
    }

    Submit(role) {

      const obj = {
          mail: this.myForm.value.email,
          name: this.myForm.value.name,
          role: role
      };

      this.httpService.putToBackend(obj).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
      );
    }

    appliedRolesValidator(){
      for(let key in this.selectedObj) {
        if(Object.values(this.selectedObj).includes(true)){
          this.formCanBeVisible = true;
        } else {
          this.formCanBeVisible = false;         
        }
        if(!this.applieadJobs.includes(key) && this.selectedObj[key] === true) {
          this.applieadJobs.push(key);
        } else if(this.applieadJobs.includes(key) && this.selectedObj[key] === false) {
          const index = this.applieadJobs.indexOf(key);
          this.applieadJobs.splice(index, 1);         
        }
      }
    }

    moreSubmit() {
      for(let i = 0; i < this.applieadJobs.length; i++) {
        this.Submit(this.applieadJobs[i]);
      }
      this.myForm.reset();      
    }
}
