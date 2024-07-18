import {formatBETimeStamp, getUTCTimeStamp} from "tools/date";

export const getTimeLeft = (datetimeFrom: number, datetimeTo: number) => {
    const nowTimestamp = getUTCTimeStamp();

    let targetTime = formatBETimeStamp(datetimeFrom);
    let difference = targetTime - nowTimestamp;
    let isZoneActive = false;

    if (nowTimestamp >= targetTime) {
        // Переключение на datetimeTo
        targetTime = formatBETimeStamp(datetimeTo);
        difference = targetTime - nowTimestamp;
        isZoneActive = true
    }

    let timeLeft = '';
    const isTimeFinish = difference <= 0;

    if (isTimeFinish) {
        timeLeft = '00:00:00';
        isZoneActive = false
    } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        timeLeft = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    return {timeLeft, isTimeFinish, isZoneActive}
}

export const getDateTimeInUserTimeZone = (date: number = 0): string => {
    const formatDate = new Date(formatBETimeStamp(date));
    const hours = formatDate.getHours();
    const minutes = formatDate.getMinutes();
    const isNeedMinutesPrefix = minutes < 10;
    const isNeedHoursPrefix = hours < 10;
    const prefixMinutes = isNeedMinutesPrefix ? 0 : '';
    const prefixHours = isNeedHoursPrefix ? 0 : '';
    const formatMinutes = `${prefixMinutes}${minutes}`;
    const formatHours = `${prefixHours}${hours}`;

    return `${formatHours}:${formatMinutes}`
}