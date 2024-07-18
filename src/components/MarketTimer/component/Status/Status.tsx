import {ICellProps, IStatusProps} from "./Status.types";
import {styled} from "@mui/material";
import {FC} from "react";

export const StatusContainer = styled('div')({
    width: 12,
    position: "relative",
    height: 12,
});
export const InternalStatusContent = styled('div')<ICellProps>(({backgroundColor}) => ({
    borderRadius: '50%',
    width: 6,
    height: 6,
    position: "absolute",
    background: backgroundColor,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: 2
}));
export const ExternalStatusContent = styled('div')<ICellProps>(({backgroundColor}) => ({
    width: 12,
    height: 12,
    opacity: '10%',
    background: backgroundColor,
    borderRadius: '50%',

}));

export const Status: FC<IStatusProps> = ({isActive}) => {
    const background = isActive ? '#17B26A' : '#EC3942';

    return (
        <StatusContainer>
            <ExternalStatusContent backgroundColor={background}/>
            <InternalStatusContent backgroundColor={background}/>
        </StatusContainer>
    )
}