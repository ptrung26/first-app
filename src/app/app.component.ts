import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-app';
  rfDemo: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rfDemo = this.fb.group({
    });
  }
}
