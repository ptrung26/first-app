import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { LocalStorageService } from "src/app/shared/utils/local-storage.service";
import { AppConsts } from "src/app/shared/AppConsts";
import { Observable, delay } from "rxjs";

@Injectable()
export class LoginService {
    static readonly twoFactorRememberClientTokenName = 'TwoFactorRememberClientToken';

    static readonly FACEBOOK: string = "FACEBOOK";
    static readonly GOOGLE: string = "GOOGLE";
    static readonly MICROSOFT: string = "MICROSOFT";

    constructor(private _tokenService: TokenService, private _localStorage: LocalStorageService) {

    }

    authenticate(finallyCallBack: () => {}, redirectUrl?: string): void {
        finallyCallBack = finallyCallBack || (() => { })
        new Observable().pipe(delay(2000)).subscribe(() => {
            alert("Login success");
            redirectUrl = redirectUrl || "http://localhost:4200/account/login";
            location.href = redirectUrl;
        })

    }

    /**
     * Handle Login 
     * @param accessToken 
     * @param encryptedAccessToken 
     * @param exprireInSeconds 
     * @param refreshToken 
     * @param refreshTokenExpireInSeconds 
     * @param rememberMe 
     * @param twoFactorRememberClientToken 
     * @param redirectUrl 
     */
    login(accessToken: string, encryptedAccessToken: string, exprireInSeconds: number, refreshToken: string, refreshTokenExpireInSeconds: number,
        rememberMe?: boolean, twoFactorRememberClientToken?: string, redirectUrl?: string) {
        // Set token and expiredTime
        let tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * exprireInSeconds)) : undefined;
        // this._tokenService.setToken(accessToken, tokenExpireDate);

        // Set refreshToken and expireTime
        if (refreshToken && rememberMe) {
            let refreshTokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * refreshTokenExpireInSeconds)) : undefined;
            // this._tokenService.setRefreshToken(
            //     refreshToken,
            //     refreshTokenExpireDate
            // );
        }

        // Save token and expireTime in local storage 
        this._localStorage.setItem(AppConsts.authorization.encrptedAuthTokenName, {
            token: encryptedAccessToken,
            expireDate: tokenExpireDate,
        })

        // Save two factor token and expireTime in localStorage 
        if (twoFactorRememberClientToken) {
            this._localStorage.setItem(LoginService.twoFactorRememberClientTokenName, {
                twoFactorRememberClientToken,
                expireDate: new Date(new Date().getTime() + 365 * 86400000), // 1 year
            })
        }

        // Redirect after login 
        if (redirectUrl) {
            location.href = redirectUrl;
        } else {
            location.href = "http://localhost:4200/";
        }


    }
}