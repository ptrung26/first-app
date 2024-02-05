import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PasswordValidatorDirective } from "./validators/passsword-validator.directive";

@NgModule({
    imports: [CommonModule],
    declarations: [
        PasswordValidatorDirective
    ],
    exports: [
        PasswordValidatorDirective
    ]
})
export class UtilsModule {

}