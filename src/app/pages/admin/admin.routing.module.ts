import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PostComponent } from "./post/post.component";
import { AdminComponent } from "./admin.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AdminComponent,
                children: [
                    {
                        path: 'posts',
                        component: PostComponent,
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule {

} 