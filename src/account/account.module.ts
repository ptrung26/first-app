import { NgModule } from "@angular/core";
import { AccountRoutingModule } from "./account.routing.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
    imports: [AccountRoutingModule],
    declarations: [LoginComponent]
})
export class AccountModule {

}