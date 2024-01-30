import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SHARED_ZORRO_MODULES } from "../common/ant-zorro.module";

// #region your componets & directives
const COMPONENTS: any = [];
const DIRECTIVES: any = [];
// #endregion

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ...SHARED_ZORRO_MODULES,
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES,
        ...SHARED_ZORRO_MODULES,
    ],
})
export class SharedModule { }