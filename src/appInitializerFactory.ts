import { Injector } from "@angular/core";
import { AppConsts } from "./app/shared/AppConsts";
import { PlatformLocation } from "@angular/common";
import { getBaseHref, getDocumentOrigin } from "./root.module";

export function appInitializerFactory(injector: Injector, platformLocation: PlatformLocation) {
    return () => {
        new Promise<boolean>((resolve, reject) => {
            AppConsts.appBaseHref = getBaseHref(platformLocation);
            let appBaseUrl = getDocumentOrigin() + AppConsts.appBaseHref;
            AppPreBootstrap;
        });
    };
}
