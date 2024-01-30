import { Injectable } from '@angular/core';
import * as localForage from 'localforage';

@Injectable()
export class LocalStorageService {

    getItem(key: string, callback: any): void {
        if (!localForage) {
            return;
        }

        localForage.getItem(key, callback);
    }


    setItem(key: string, value: any, callback?: any): void {
        if (!localForage) {
            return;
        }

        if (value === null) {
            value = undefined;
        }

        localForage.setItem(key, value, callback);
    }

    removeItem(key: string, callback?: any): void {
        if (!localForage) {
            return;
        }

        localForage.removeItem(key, callback);
    }

}
