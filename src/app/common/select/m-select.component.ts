import {
    Component,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    Optional,
    Provider,
    SimpleChanges,
    forwardRef,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ISelectOption, ISelectOptions, SelectOptions } from './model';

const VALUE_ACCESSOR: Provider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true,
};

@Component({
    selector: 'm-select',
    templateUrl: './m-select.component.html',
    providers: [VALUE_ACCESSOR],
})
export default class SelectComponent
    implements ControlValueAccessor, OnDestroy, OnChanges {
    options: ISelectOption[] = [];
    _isDisabled = false;
    @Input() control = new FormControl(null);

    @Input()
    get value() {
        return this.control.value;
    }

    set value(v: any) {
        if (
            !(
                (v === null || v === undefined) &&
                (this.control.value === null || this.control.value === undefined)
            )
        ) {
            this.control.setValue(v);
        }
    }

    constructor(
        @Optional() @Inject(SelectOptions) private directive: ISelectOptions
    ) {
        if (directive.options$) {
            directive.options$.subscribe((result) => {
                this.options = result;
            });
        }
    }
    ngOnChanges(changes: SimpleChanges): void { }

    ngOnDestroy(): void { }

    private onChange = (v: any) => { };
    private onTouched = () => { };
    onFocus(event: any): void {
        this.onTouched();
    }

    /**
     * Write value
     * @param obj 
     */
    writeValue(obj: any): void {
        this.value = obj;
    }

    /**
     * Handle when value change 
     * @param fn 
     */
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     * Handle when element is touched 
     * @param fn 
     */
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    /**
     * Set disable element 
     * @param isDisabled 
     */
    setDisabledState?(isDisabled: boolean): void {
        this._isDisabled = isDisabled;
    }
}
