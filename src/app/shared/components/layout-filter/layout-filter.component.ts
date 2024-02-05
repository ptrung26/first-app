import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'layout-filter',
    templateUrl: './layout-filter.component.html',
    styleUrls: ['./layout-filter.component.scss']
})
export class LayoutFilterComponent {
    @Input() enableEnterEvent: boolean = true;
    @Output() onSearch = new EventEmitter();

    search() {
        this.onSearch.emit();
    }
    onEnter() {
        if (this.enableEnterEvent) {
            this.search();
        }
    }
}