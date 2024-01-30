import { NgModule } from "@angular/core";
import { AccountRoutingModule } from "./account.routing.module";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "src/app/shared/shared.module";
import { PasswordComplexityValidator } from "src/app/shared/utils/validators/password-complexity-validator.directive";
import { LoginService } from "./login/login.service";
import { TokenService } from "./login/token.service";
import { LocalStorageService } from "src/app/shared/utils/local-storage.service";

@NgModule({
    imports: [AccountRoutingModule, SharedModule],
    declarations: [LoginComponent, PasswordComplexityValidator],
    providers: [LoginService, TokenService, LocalStorageService]
})
export class AccountModule {

}