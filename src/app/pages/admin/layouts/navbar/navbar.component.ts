import { Component, ViewEncapsulation } from '@angular/core';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';
@Component({
    selector: 'layout-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
    options: LayoutDefaultOptions = {
        hideHeader: true
    };

}
