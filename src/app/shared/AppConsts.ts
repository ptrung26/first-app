export class AppConsts {

    static remoteServiceBaseUrl: string;
    static remoteServiceBaseUrlFormat: string;
    static appBaseUrl: string;
    static appBaseHref: string; // returns angular's base-href parameter value if used during the publish
    static appBaseUrlFormat: string;

    static readonly authorization = {
        encrptedAuthTokenName: 'enc_auth_token',
    };


}