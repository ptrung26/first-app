import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SHARED_ZORRO_MODULES } from './common/ant-zorro.module';
import { KetQuaDieuTriDirective } from './common/data-common/select/ket-qua-dieu-tri.directive';
import SelectComponent from './common/select/m-select.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SharedModule } from './shared/shared.module';


const NAVCOMPONENTS = [
  HeaderComponent,
];
registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, SelectComponent, KetQuaDieuTriDirective, ...NAVCOMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class AppModule { }
