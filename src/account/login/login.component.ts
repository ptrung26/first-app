import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "./login.service";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    sgnForm: FormGroup;
    submitting: boolean = false;

    constructor(private fb: FormBuilder, private _loginService: LoginService) {
        this.sgnForm = this.fb.group({
            email: ['', Validators.email],
            password: [''],
            isRemember: [false]
        })
    }

    onSubmit() {
        this.submitting = true;
        this._loginService.authenticate(() => (this.submitting = false));
    }

}