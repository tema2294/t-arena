import {SwitchProps} from "@mui/material";
import {StyledSwitch} from "./Switch.styles";

export const Switch = (props: SwitchProps) => <StyledSwitch focusVisibleClassName=".Mui-focusVisible" {...props} />