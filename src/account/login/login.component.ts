import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  submit(formValue: NgForm) {
    if (formValue.form.invalid) {
      for (let i in formValue.form.controls) {
        formValue.form.controls[i].markAsDirty();
        formValue.form.controls[i].updateValueAndValidity();
      }
      alert('Something wrong!');
    }
  }
}
