export enum ECurrency {
    RUB = 'RUB',
    USD = 'USD',
    USDT = 'USDT',
}

export const CURRENCY_SYMBOL: Record<ECurrency, string> = {
    [ECurrency.RUB]: '₽',
    [ECurrency.USD]: '$',
    [ECurrency.USDT]: '$',
}

export const IS_DEV = APP_MODE === 'development';
export const HOST_NAME = IS_DEV ? 'test1.dev77.xyz' : window.location.hostname;

