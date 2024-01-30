import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PasswordComplexityValidator } from "./validators/password-complexity-validator.directive";

@NgModule({
    imports: [CommonModule],
    declarations: [
        PasswordComplexityValidator,
    ],
    exports: [
        PasswordComplexityValidator,
    ]
})
export class UtilsModule {

}