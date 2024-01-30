export class AppMenuItem {
    name: string = "";
    permissionName: string = "";
    icon: any = "";
    route: string = "";
    items: AppMenuItem[] = [];
    requiresAuthentication: boolean = true;
    parameters: any = {};

    constructor(
        name: string,
        permissionName: string,
        icon: string,
        route: string,
        items?: AppMenuItem[],
        parameters?: Object,
        requiresAuthentication?: boolean,
    ) {
        this.name = name;
        this.permissionName = permissionName;
        this.icon = icon;
        this.route = route;
        this.parameters = parameters;

        if (!Array.isArray(items)) {
            this.items = [];
        }

        if (this.permissionName) {
            this.requiresAuthentication = true;
        } else {
            this.requiresAuthentication = requiresAuthentication ? requiresAuthentication : false;
        }

    }

}