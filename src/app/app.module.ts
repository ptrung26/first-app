import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SHARED_ZORRO_MODULES } from './common/ant-zorro.module';
import SelectComponent from './common/select/m-select.component';
import { KetQuaDieuTriDirective } from './common/data-common/select/ket-qua-dieu-tri.directive';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layout/header/header.component';


const NAVCOMPONENTS = [
  HeaderComponent,
];
registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, SelectComponent, KetQuaDieuTriDirective, ...NAVCOMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...SHARED_ZORRO_MODULES,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }
