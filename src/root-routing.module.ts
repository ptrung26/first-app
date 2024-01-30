import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule), // Lazy load account module
    data: { preload: true },
  },
  {
    path: 'admin',
    loadChildren: () => import("./app/pages/admin/admin.module").then(m => m.AdminModule),
    data: { preload: true },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [],
})
export class RootRoutingModule { }
