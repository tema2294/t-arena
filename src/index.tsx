import * as Sentry from "@sentry/browser";
import {createRoot} from "react-dom/client";
import {App} from './App';

const loadEnvAndInitialize = async () => {
    // Инициализация Sentry
    Sentry.init({
        dsn: "https://20777689d92748bdbe4efb8ca0e26c6f@glitchtip.dev77.xyz/2",
        environment: 'DEV'
    });
    console.log('STAND:', 'DEV');

    // Инициализация React приложения
    const domNode = document.getElementById('root');

    if (domNode !== null) {
        const root = createRoot(domNode);
        root.render(<App/>);
    }
}

loadEnvAndInitialize();