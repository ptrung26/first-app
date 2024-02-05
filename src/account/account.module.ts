import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account.routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { TokenService } from './login/token.service';
import { LocalStorageService } from '../shared/utils/local-storage.service';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { UtilsModule } from '@shared/utils/utils.module';

@NgModule({
  imports: [AccountRoutingModule, SharedModule, UtilsModule],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: [LoginService, TokenService, LocalStorageService],
})
export class AccountModule { }
