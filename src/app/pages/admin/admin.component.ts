import { Component } from '@angular/core';
import { AppNavigationService } from './layouts/nav/app-navigation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private _appNavigationService: AppNavigationService) {
    this._appNavigationService.mapToNgAlainMenu();
  }
}
