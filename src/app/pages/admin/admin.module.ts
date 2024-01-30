import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin.routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PostComponent } from "./post/post.component";
import { AdminComponent } from "./admin.component";
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { AppNavigationService } from "./layouts/nav/app-navigation.service";

@NgModule({
    imports: [AdminRoutingModule, SharedModule, AdminRoutingModule],
    declarations: [PostComponent, AdminComponent, NavbarComponent],
    providers: [AppNavigationService]
})
export class AdminModule {

}