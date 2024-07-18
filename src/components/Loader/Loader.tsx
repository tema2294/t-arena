import {ILoaderProps} from "components/Loader/Loader.types";
import {FC} from "react";
import {LoaderContainer, LoaderIcon, LoaderText} from "./Loader.styles";


export const Loader: FC<ILoaderProps> = ({isLoading, hasShadow}) => {

    if (!isLoading) return null;

    return (
        <LoaderContainer hasShadow={hasShadow}>
            <LoaderIcon name={'LoaderDark'}/>
            <LoaderText variant={'caption'}>
                Loading...
            </LoaderText>
        </LoaderContainer>
    )
}