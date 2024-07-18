import React, {ChangeEvent, useEffect, useState} from "react";

export const useOrderModalCalculating = ({minQuantity, availableQuantity}: {
    minQuantity: number,
    availableQuantity: number
}) => {
    const [count, setCount] = useState(minQuantity);

    useEffect(() => {
        setCount(minQuantity);
    }, [minQuantity])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        const stringValue = `${value || 0}`
        const regex = /^[0-9]*$/;
        const numberValue = Number(value);
        const hasOverflowError = stringValue.length > 10 || numberValue > availableQuantity;
        const isValueNumber = regex.test(stringValue);
        const isValueCorrect = isValueNumber && !hasOverflowError;

        if (isValueCorrect) {
            setCount(numberValue);
        }
    };

    const handleIncrementCount = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        event.preventDefault();

        setCount((prevCount) => {
            const nextCount = prevCount + 1;
            const hasOverflowError = `${nextCount}`.length > 10 || nextCount > availableQuantity;

            if (hasOverflowError) return prevCount;
            return nextCount
        })
    }
    const handleDecrementCount = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        event.preventDefault();
        setCount((prevCount) => prevCount - 1 || 1)
    }


    return {
        handleDecrementCount,
        handleIncrementCount,
        handleChange, count,
        setCount
    }
}