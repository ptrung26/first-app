export class AppConsts {

    static remoteServiceBaseUrl: string;
    static remoteServiceBaseUrlFormat: string;
    static appBaseUrl: string;
    static appBaseHref: string; // returns angular's base-href parameter value if used during the publish
    static appBaseUrlFormat: string;

    static readonly authorization = {
        encrptedAuthTokenName: 'enc_auth_token',
    };

    // TableGrid 
    static readonly grid = {
        defaultPageSize: 10,
        defaultPageSizes: [5, 10, 15, 20, 25, 30, 50, 80, 100],
    };


}