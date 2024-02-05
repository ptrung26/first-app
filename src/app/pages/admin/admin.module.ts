import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { AppNavigationService } from './layouts/nav/app-navigation.service';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutFilterComponent } from '@app/shared/components/layout-filter/layout-filter.component';
import { LayoutHeaderComponent } from '@app/shared/components/layout-header/layout-header.component';
import { CreateOrEditPostComponent } from './post/create-or-edit-post.component';

@NgModule({
  imports: [AdminRoutingModule, SharedModule, AdminRoutingModule,],
  declarations: [PostComponent, AdminComponent, NavbarComponent, PostComponent, LayoutFilterComponent, LayoutHeaderComponent, CreateOrEditPostComponent],
  providers: [AppNavigationService],
})
export class AdminModule { }
