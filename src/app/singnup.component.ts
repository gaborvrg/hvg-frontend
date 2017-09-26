import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor() {}

    onSubmit() {
        console.log(this.myForm);
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ])
        });
    }
}
