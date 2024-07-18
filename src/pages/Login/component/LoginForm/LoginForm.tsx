import {TextField} from "@mui/material";
import {Icon} from "components/Icon";
import {EDictionaryKey, useTranslation} from "hocs/Localization";
import {useTextFieldControl} from "hooks/use-text-field-control";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {DataSlice, IGetTokenResult, useGetTokenMutation} from "redux-store/api";
import {TBaseQueryReturnType} from "redux-store/api/api.types";
import {setLoginMode} from "redux-store/appState";
import {useAppDispatch} from "redux-store/hooks";
import {
    FooterInfo,
    FooterLink,
    Form,
    FormContainer,
    FormFooter,
    FormTitle,
    FormWrapper,
    SignInButton
} from "./LoginForm.styles";


export const LoginForm = () => {
    const {translate} = useTranslation();
    const [getToken, {isLoading, isError: isResponseError}] = useGetTokenMutation();
    const [_, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const [isValidationError, setValidationError] = useState(false);
    const [username, setUsername] = useTextFieldControl('');
    const [password, setPassword] = useTextFieldControl('');
    const hasError = isResponseError || isValidationError;

    const handleSetRegistrationMode = (): void => {
        setSearchParams({mode: 'registration'});
    };

    const handleSubmit = async () => {
        const hasValue = username.length > 0 && password.length > 0;

        if (!hasValue) {
            setValidationError(true);
            return;
        }

        setValidationError(false);
        const {data} = await getToken({username, password}) as TBaseQueryReturnType<IGetTokenResult>;

        const {refresh, access} = data || {};
        const hasData = !!refresh && !!access

        if (hasData) {
            dispatch(DataSlice.util?.resetApiState())
            dispatch(setLoginMode(true))
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <FormContainer>
            <FormTitle variant={'body1'}>
                {translate(EDictionaryKey.WelcomeBack)}
            </FormTitle>
            <FormWrapper>
                <Form>
                    <TextField onKeyDown={handleKeyDown} type={'username'}
                               name='username'
                               error={hasError}
                               value={username}
                               onChange={setUsername}
                               variant="outlined" size={'medium'}
                               placeholder={translate(EDictionaryKey.UserName)}/>
                    <TextField onKeyDown={handleKeyDown} type={'password'}
                               name='password'
                               error={hasError}
                               value={password}
                               onChange={setPassword}
                               variant="outlined"
                               size={'medium'}
                               placeholder={translate(EDictionaryKey.Password)}/>
                </Form>
                <SignInButton disabled={isLoading} onClick={handleSubmit}>
                    {translate(EDictionaryKey.SignIn)}
                </SignInButton>
            </FormWrapper>
            <FormFooter>
                <FooterInfo variant={'caption'}>
                    {translate(EDictionaryKey.NewToTradeArena)}
                </FooterInfo>
                <FooterLink onClick={handleSetRegistrationMode} variant={'body1'}>
                    {translate(EDictionaryKey.GetStarted)}
                    <Icon activeCursor={true} name={'LinkArrow'}/>
                </FooterLink>
            </FormFooter>
        </FormContainer>
    )
}