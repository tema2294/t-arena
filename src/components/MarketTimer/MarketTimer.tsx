import {Typography} from "@mui/material";
import {Label} from "components/Label";
import {FC, useEffect, useState} from "react";
import {Status} from "./component";
import {Container, Content, HeaderContainer, Img, Timer} from "./MarketTime.styles";
import {getDateTimeInUserTimeZone, getTimeLeft} from "./MarketTime.utils";
import {IMarketTimerProps} from "./MarketTimer.types";


export const MarketTimer: FC<IMarketTimerProps> = (props) => {
    const {zoneName, imageSrc, id, datetimeTo, datetimeFrom} = props;
    const [timeLeft, setTimeLeft] = useState('00:00:00');
    const [isZoneActive, setZoneActive] = useState(false);
    const dateFromInUserTimeZone = getDateTimeInUserTimeZone(datetimeFrom);
    const dateToInUserTimeZone = getDateTimeInUserTimeZone(datetimeTo);

    useEffect(() => {
        const timer = setInterval(() => {
            const {timeLeft: nextTimeLeft, isTimeFinish, isZoneActive} = getTimeLeft(datetimeFrom, datetimeTo)

            setTimeLeft(nextTimeLeft);
            setZoneActive(isZoneActive);
            isTimeFinish && clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);
    }, [datetimeTo, datetimeFrom]);

    const hasImage = !!imageSrc

    return (
        <Container>
            {hasImage ? <Img src={imageSrc}/> : <Label title={zoneName}/>}
            <Content>
                <HeaderContainer>
                    <Typography color={'var(--header-color)'} variant={"body500"}>{zoneName}</Typography>
                    <Timer color={'var(--header-color)'} variant={"body14_400"}>{timeLeft}</Timer>
                </HeaderContainer>
                <HeaderContainer>
                    <Status isActive={isZoneActive}/>
                    <Typography color={'var(--text-color)'}
                                variant={"caption"}>{`${dateFromInUserTimeZone}-${dateToInUserTimeZone}`}</Typography>
                </HeaderContainer>
            </Content>
        </Container>
    )
}