import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { AppNavigationService } from './layouts/nav/app-navigation.service';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [AdminRoutingModule, SharedModule, AdminRoutingModule],
  declarations: [PostComponent, AdminComponent, NavbarComponent, PostComponent],
  providers: [AppNavigationService],
})
export class AdminModule {}
