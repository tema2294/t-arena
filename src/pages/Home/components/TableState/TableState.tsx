import {Icon} from "components/Icon";
import {FC} from "react";
import {StateContainer, SubTitleText, TextContainer, Title} from './TableState.styled'
import {ITableStateProps} from "./TableState.types";


export const TableState: FC<ITableStateProps> = (props) => {
    const {title, subtitle, iconName} = props;

    return (
        <StateContainer>
            <Icon name={iconName}/>
            <TextContainer>
                <Title>{title}</Title>
                <SubTitleText variant={'caption'}>{subtitle}</SubTitleText>
            </TextContainer>
        </StateContainer>
    )
}