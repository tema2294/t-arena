import {IS_DEV} from "../../constants";

export enum EApiVersions {
    V1 = 'v1',
}

export enum EApiMethods {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Patch = 'patch',
    Delete = 'delete'
}

export enum ESpecName {
    Country = 'country'
}


export const BASE_URL = IS_DEV ? '' : process.env.REACT_APP_API_BASE_URL;

export const BACKEND_REGISTER_AUTH_KEY = 'RnJvbnQ6ITEyMzQ1cXdlUlQh'