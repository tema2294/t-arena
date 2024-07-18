import {getTimeLeft} from "./MarketTime.utils";


// Mock Date.now()
const mockCurrentTime = (time: number) => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => new Date(time).getTime());
};

describe('getTimeLeft function tests', () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Future Date - datetimeFrom in the future', () => {
        const futureTimestamp = Date.now() + 10000; // 10 seconds in the future
        mockCurrentTime(Date.now());
        const {timeLeft, isTimeFinish, isZoneActive} = getTimeLeft(futureTimestamp / 1000, 0);

        expect(timeLeft).not.toBe('00:00:00');
        expect(isTimeFinish).toBe(false);
        expect(isZoneActive).toBe(false);
    });

    test('Past Date - datetimeFrom in the past, datetimeTo in the future', () => {
        const pastTimestamp = Date.now() - 10000; // 10 seconds in the past
        const futureTimestamp = Date.now() + 10000; // 10 seconds in the future
        mockCurrentTime(Date.now());
        const {timeLeft, isTimeFinish, isZoneActive} = getTimeLeft(pastTimestamp / 1000, futureTimestamp / 1000);

        expect(timeLeft).not.toBe('00:00:00');
        expect(isTimeFinish).toBe(false);
        expect(isZoneActive).toBe(true);
    });

    test('Both Dates Passed - datetimeFrom and datetimeTo in the past', () => {
        const pastTimestamp = Date.now() - 10000; // 10 seconds in the past
        mockCurrentTime(Date.now());
        const {timeLeft, isTimeFinish, isZoneActive} = getTimeLeft(pastTimestamp / 1000, pastTimestamp / 1000);

        expect(timeLeft).toBe('00:00:00');
        expect(isTimeFinish).toBe(true);
        expect(isZoneActive).toBe(false);
    });

    test('Exact Current Time - datetimeFrom is now', () => {
        const futureTimestamp = Date.now() + 10000; // 10 seconds in the future
        mockCurrentTime(Date.now());
        const {timeLeft, isTimeFinish, isZoneActive} = getTimeLeft(Date.now() / 1000, futureTimestamp / 1000);

        expect(timeLeft).not.toBe('00:00:00');
        expect(isTimeFinish).toBe(false);
        expect(isZoneActive).toBe(true);
    });

    test('Invalid Dates - negative or null values', () => {
        mockCurrentTime(Date.now());
        const {timeLeft, isTimeFinish, isZoneActive} = getTimeLeft(-1, -1);

        expect(timeLeft).toBe('00:00:00'); // Assuming the function returns '00:00:00' for invalid inputs
        expect(isTimeFinish).toBe(true);
        expect(isZoneActive).toBe(false);
    });

    test('Zero Difference - datetimeFrom equals datetimeTo in the future', () => {
        const futureTimestamp = Date.now() + 10000; // 10 seconds in the future
        mockCurrentTime(Date.now());
        const {timeLeft, isTimeFinish, isZoneActive} = getTimeLeft(futureTimestamp / 1000, futureTimestamp / 1000);

        expect(timeLeft).not.toBe('00:00:00');
        expect(isTimeFinish).toBe(false);
        expect(isZoneActive).toBe(false);
    });
});
