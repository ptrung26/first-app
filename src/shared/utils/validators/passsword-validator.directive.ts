import { Directive, Input, forwardRef } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
} from '@angular/forms';

@Directive({
    selector:
        '[requireDigit], [requireUppercase], [requireLowerCase], [requireLength]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => PasswordValidatorDirective),
            multi: true,
        },
    ],
})
export class PasswordValidatorDirective implements Validator {

    // 2: create a getter and a setter for the input property
    private _requireDigit: boolean;
    private _requireUppercase: boolean;
    private _requireLowercase: boolean;
    private _requireNonAlphanumeric: boolean;
    private _requiredLength: number;

    private _onChange?: () => void

    @Input('requireDigit')
    get requireDigit(): boolean {
        return this._requireDigit;
    }

    set requireDigit(value: boolean) {

        this._requireDigit = value;
        // 3: invoke the change handler
        if (this._onChange) {
            this._onChange()
        }
    }

    @Input('requireUppercase')
    get requireUppercase(): boolean {
        return this._requireUppercase;
    }

    set requireUppercase(value: boolean) {
        this._requireUppercase = value;
        // 3: invoke the change handler
        if (this._onChange) {
            this._onChange()
        }

    }

    @Input('requireLowercase')
    get requireLowercase(): boolean {
        return this._requireLowercase;
    }

    set requireLowercase(value: boolean) {
        this._requireLowercase = value;
        // 3: invoke the change handler
        if (this._onChange) {
            this._onChange()
        }
    }



    @Input('requireNonAlphanumeric')
    get requireNonAlphanumeric(): boolean {
        return this._requireNonAlphanumeric;
    }

    set requireNonAlphanumeric(value: boolean) {
        this._requireNonAlphanumeric = value;
        // 3: invoke the change handler
        if (this._onChange) {
            this._onChange()
        }
    }

    @Input('requireLength')
    get requiredLength(): number {
        return this._requiredLength;
    }

    set requiredLength(value: number) {
        this._requiredLength = value;
        // 3: invoke the change handler
        if (this._onChange) {
            this._onChange()
        }
    }


    // The validate need return null when the control is valid
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const givenPassword = control.value;

        let validationResult: Partial<{
            requireDigit: boolean;
            requireUppercase: boolean;
            requireLowercase: boolean;
            requireNonAlphanumeric: boolean;
            requiredLength: boolean;
        }> | null = {};


        if (this._requireDigit && givenPassword && !/[0-9]/.test(givenPassword)) {
            validationResult = validationResult || {};
            validationResult.requireDigit = true;
        }

        if (
            this._requireUppercase &&
            givenPassword &&
            !/[A-Z]/.test(givenPassword)
        ) {
            validationResult = validationResult || {};
            validationResult.requireUppercase = true;

        }
        if (
            this._requireLowercase &&
            givenPassword &&
            !/[a-z]/.test(givenPassword)
        ) {
            validationResult = validationResult || {};
            validationResult.requireLowercase = true;

        }
        if (
            this._requiredLength &&
            givenPassword &&
            givenPassword.length < this._requiredLength
        ) {
            validationResult = validationResult || {};
            validationResult.requiredLength = true;

        }

        if (
            this._requireNonAlphanumeric &&
            givenPassword &&
            /^[0-9a-zA-Z]+$/.test(givenPassword)
        ) {
            validationResult = validationResult || {};
            validationResult.requireNonAlphanumeric = true;
        }
        return validationResult;
    }


    // 1. register a change handler to trigger the validator when the value of the control changes
    registerOnValidatorChange?(fn: () => void): void {
        this._onChange = fn;
    }
}
