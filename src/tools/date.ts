export const getUTCDate = () => new Date().toISOString();

export const getUTCTimeStamp = () => {
    const UTCDate = getUTCDate();
    const UTCDateTimestamp = new Date(UTCDate).getTime();

    return UTCDateTimestamp;
}

export const formatBETimeStamp = (timeStamp: number) => timeStamp * 1000;