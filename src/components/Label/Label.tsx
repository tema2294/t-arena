import {FC} from "react";
import {ILabelProps} from "components/Label/Label.types";
import {LabelContainer} from "components/Label/Label.styles";
import {Typography} from "@mui/material";

export const Label: FC<ILabelProps> = ({title = '', ...otherProps}) => {
    const [formatLabel] = title;

    return <LabelContainer {...otherProps}>
        <Typography>{formatLabel}</Typography>
    </LabelContainer>
}