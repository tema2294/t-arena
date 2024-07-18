import {ChangeEvent, useState} from 'react';

export const useTextFieldControl = <GInitialValue>(initialValue: GInitialValue): [value: GInitialValue, handleChange: (event: ChangeEvent<HTMLInputElement>) => void] => {
    const [value, setValue] = useState<GInitialValue>(initialValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value as GInitialValue);
    };

    return [value, handleChange];
};

