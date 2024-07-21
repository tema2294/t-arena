export interface IGetTokenQueryParams {
    username: string,
    password: string
}

export interface IRefreshTokenQueryParams {
    refresh?: string,
}

export interface IRegisterQueryParams {
    email: string,
    username: string,
    tg_nickname: string,
    registration_date: string
}


export interface ILoginRequest {
    login: string,
    pass: string
}

export interface ILoginResponse {
    validity: string
    refresh: string,
    access: string
}

export interface IRegisterQueryResult {
    id: number
}

export interface IRefreshTokenResult {
    access: string,
}

export interface IGetTokenResult {
    access: string,
    refresh: string
}