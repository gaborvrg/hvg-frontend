import { HttpService } from './http.service';
import { PageidService } from './pageId.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(public pageIdService: PageidService, private httpService: HttpService) {}

    onSubmit() {

        const obj = {
            mail: this.myForm.value.email,
            name: this.myForm.value.name,
            role: this.myForm.value.pageId
        };


        this.httpService.putToBackend(obj).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );

        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            pageId: new FormControl(this.pageIdService.pageObj['description']),
            pageName: new FormControl(this.pageIdService.pageObj['name']),
            name: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ])
        });
    }
}
