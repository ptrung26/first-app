
import { Injectable } from '@angular/core';
import { AppMenuItem } from './app-menu-item';
import { AppMenu } from './app-menu';
import { Menu, MenuService } from '@delon/theme';

@Injectable()
export class AppNavigationService {
    constructor(private _ngAlainMenuService: MenuService) {

    }

    getMenu(): AppMenu {
        return new AppMenu('MainMenu', 'MainMenu', [
            // new AppMenuItem('Notifications', 'Pages.Notifications', 'bell', '/app/notifications'),
            new AppMenuItem('Dashboard', "", '', '/admin/dashboard'),
            new AppMenuItem('Posts', "", '', '/admin/posts'),

        ]);
    }

    mapToNgAlainMenu() {
        let menu = this.getMenu();
        let ngAlainRootMenu = <Menu>{
            text: "",
            group: false,
            hideInBreadcrumb: true,
            children: [],
        };
        this.generateNgAlainMenus(ngAlainRootMenu.children || [], menu.items);

        let ngAlainMenus = [ngAlainRootMenu];
        this._ngAlainMenuService.add(ngAlainMenus);
    }

    generateNgAlainMenus(ngAlainMenus: Menu[], appMenuItems: AppMenuItem[]) {
        appMenuItems.forEach((item) => {
            let ngAlainMenu: Menu;

            ngAlainMenu = {
                text: item.name,
                link: item.route,
                icon: { type: 'icon', value: item.icon },
                hide: false,
            };

            if (item.items && item.items.length > 0) {
                ngAlainMenu.children = [];
                this.generateNgAlainMenus(ngAlainMenu.children, item.items);
            }

            ngAlainMenus.push(ngAlainMenu);
        });
    }

    checkChildMenuItemPermission(menuItem: AppMenuItem): boolean {
        for (let i = 0; i < menuItem.items.length; i++) {
            let subMenuItem = menuItem.items[i];

            if (subMenuItem.permissionName) {
                return true;
            }

            if (subMenuItem.items && subMenuItem.items.length) {
                return this.checkChildMenuItemPermission(subMenuItem);
            } else if (!subMenuItem.permissionName) {
                return true;
            }
        }

        return false;
    }


}
