import { PlatformLocation } from "@angular/common";
import * as localForage from 'localforage';
/**
 * Lấy base href    
 * @param platformLocation Xử lý vị trị và URL của ứng dụng 
 * @returns baseHref: string 
 */
export function getBaseHref(platformLocation: PlatformLocation): string {
    let baseUrl = platformLocation.getBaseHrefFromDOM();
    if (baseUrl) {
        return baseUrl;
    }

    return '/';
}

/**
 * Lấy đường dẫn gốc
 * @returns documentOrigin: string 
 */
export function getDocumentOrigin() {
    if (!document.location.origin) {
        return (
            document.location.protocol + '//' + document.location.hostname + (document.location.port ? ':' + document.location.port : '')
        );
    }

    return document.location.origin;
}

