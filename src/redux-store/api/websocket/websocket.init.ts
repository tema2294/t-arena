import {HOST_NAME} from "constants/index";
import {LOCAL_STORAGE_KEYS} from "constants/localStorageKeys";
import {useCallback, useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import {selectIsUserLogged} from "redux-store/appState";
import {constructLSItem} from "tools/local-storage";
import {formatDeepSnakeObjKeysToCamelCase} from "tools/snake-to-camel-case";
import {useAppDispatch} from "../../hooks";
import {TRootState} from "../../types";
import {useGetCombineDataQuery} from "../data/data.slice";
import {IWebsocketEvent, IWebsocketMessage, socketController} from "./websocket.tools";


export const useSocket = () => {
    const {isSuccess} = useGetCombineDataQuery();
    const isUserLogged = useSelector(selectIsUserLogged);

    const dispatch = useAppDispatch();
    const state = useSelector(state => state) as TRootState;
    const websocket = useRef<WebSocket>();

    const pushMessageInSocketController = useCallback((event: IWebsocketEvent) => {
        const message = formatDeepSnakeObjKeysToCamelCase(JSON.parse(event?.data || '{}')) as IWebsocketMessage;
        socketController(message, dispatch, state);
    }, [state]);

    useEffect(() => {
        if (!websocket.current) return;
        websocket.current.onmessage = pushMessageInSocketController;
    }, [pushMessageInSocketController]);

    useEffect(() => {
        if (!isSuccess || !isUserLogged || !!websocket.current) return;

        const {
            getItemData: getAccessToken,
        } = constructLSItem(LOCAL_STORAGE_KEYS.access_token);

        const accessToken = getAccessToken();
        websocket.current = new WebSocket(`wss://${HOST_NAME}/ws/main/`);

        if (!websocket.current) return;

        websocket.current.onopen = () => {
            // При успешном открытии соединения отправляем сообщение авторизации
            const authMessage = {
                id: 'identifier',
                method: 'login',
                params: {
                    token: accessToken,
                },
            };
            websocket.current?.send(JSON.stringify(authMessage));
        };

        websocket.current.onmessage = pushMessageInSocketController;
        websocket.current.onerror = (error) => {
            // Обработка ошибок
            console.error('WEBSOCKET error:', error);
        };

        websocket.current.onclose = () => {
            // Обработка закрытия соединения
            console.log('WEBSOCKET: connection closed');
        };

        // Закрытие сокета при размонтировании компонента
        return () => {
            websocket.current?.close();

        };
    }, [isSuccess, isUserLogged]);
};
