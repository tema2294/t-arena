export type TBaseQueryReturnType<GData = unknown> =
    | {
    data: GData;
    error?: undefined;
    meta?: IReturnMeta;
}
    | {
    error: IReturnError;
    data?: GData;
    meta?: IReturnMeta;
};

export interface IReturnMeta {
    request: Request;
    response: Response;
}

export interface IReturnError {
    status: number;
    data: any;
}
