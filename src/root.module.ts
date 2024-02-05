import { PlatformLocation } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AppModule } from './app/app.module';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { SharedModule } from './shared/shared.module';
/**
 * Lấy base href
 * @param platformLocation Xử lý vị trị và URL của ứng dụng
 * @returns baseHref: string
 */
export function getBaseHref(platformLocation: PlatformLocation): string {
  let baseUrl = platformLocation.getBaseHrefFromDOM();
  if (baseUrl) {
    return baseUrl;
  }

  return '/';
}

/**
 * Lấy đường dẫn gốc
 * @returns documentOrigin: string
 */
export function getDocumentOrigin() {
  if (!document.location.origin) {
    return (
      document.location.protocol +
      '//' +
      document.location.hostname +
      (document.location.port ? ':' + document.location.port : '')
    );
  }

  return document.location.origin;
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    RootRoutingModule,
    AppModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class RootModule {}
