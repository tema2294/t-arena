import type {Dispatch, SetStateAction} from 'react';
import {useState} from 'react';
import {useDidUpdateEffect} from './use-did-update-effect';

export const useDebouncedState = <GValue>(
    initialValue: GValue,
    delay = 500,
): [GValue, Dispatch<SetStateAction<GValue>>] => {
    const [value, setValue] = useState(initialValue);

    const [debouncedValue, setDebouncedValue] = useState(value);

    useDidUpdateEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay);

        return (): void => {
            clearTimeout(timeout);
        };
    }, [value]);

    return [debouncedValue, setValue];
};
