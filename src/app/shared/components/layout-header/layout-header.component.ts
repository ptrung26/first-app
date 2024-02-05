import { Component, Input, TemplateRef } from "@angular/core";

@Component({
    selector: 'layout-header',
    templateUrl: './layout-header.component.html',
})
export class LayoutHeaderComponent {
    @Input() title: string;
    @Input() action: TemplateRef<any>;
}