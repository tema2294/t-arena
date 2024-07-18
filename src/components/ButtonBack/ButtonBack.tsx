import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ButtonBackStyled} from "./ButtonBack.styles";
import {IButtonBackProps} from "./ButtonBack.types";

export const ButtonBack: FC<IButtonBackProps> = ({children, to}) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(to);
    }

    return (
        <ButtonBackStyled onClick={handleNavigate} variant={'text'}>
            {children}
        </ButtonBackStyled>
    )
}