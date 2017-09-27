import { HttpService } from './http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  constructor(private httpService: HttpService) {}

  submit() {
    this.httpService.getEmailList().subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    );
  }

}
