import {TextField, Typography} from "@mui/material";
import {Icon} from "components/Icon";
import {EDictionaryKey, useTranslation} from "hocs/Localization";
import {useTextFieldControl} from "hooks/use-text-field-control";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useRegisterMutation} from "redux-store/api";
import {
    FooterInfo,
    FooterLink,
    Form,
    FormContainer,
    FormFooter,
    FormTitle,
    FormWrapper,
    SignInButton
} from "../LoginForm/LoginForm.styles";

export const RegisterForm = () => {
    const [_, setSearchParams] = useSearchParams();
    const {translate} = useTranslation();
    const [sendRegistrationRequest, {isLoading, isError: isResponseError, isSuccess, data}] = useRegisterMutation();
    const [isValidationError, setValidationError] = useState(false);
    const [email, setEmail] = useTextFieldControl('');
    const [username, setUserName] = useTextFieldControl('');
    const [telegramNickname, setTelegramNickname] = useTextFieldControl('');

    const hasError = isResponseError || isValidationError;
    const isRegistrationFinished = isSuccess && !isResponseError;

    const handleSetLoginMode = (): void => {
        setSearchParams({});
    };

    const handleSubmit = async () => {
        const hasValue = email.length > 0 && username.length > 0 && telegramNickname.length > 0;

        if (!hasValue) {
            setValidationError(true);
            return;
        }

        setValidationError(false);
        await sendRegistrationRequest({
            username,
            email,
            tg_nickname: telegramNickname,
            registration_date: new Date().toISOString()
        })
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    if (isRegistrationFinished) return <Typography sx={{textAlign: 'center'}}
                                                   variant={'h3'}>{translate(EDictionaryKey.RegistrationSuccessful)}</Typography>

    return (
        <FormContainer>
            <FormTitle variant={'body1'}>
                {translate(EDictionaryKey.SignUp)}
            </FormTitle>
            <FormWrapper>
                <Form>
                    <TextField onKeyDown={handleKeyDown} error={hasError}
                               name='username' value={username}
                               onChange={setUserName}
                               variant="outlined"
                               placeholder={translate(EDictionaryKey.EnterYourName)}/>
                    <TextField onKeyDown={handleKeyDown} error={hasError}
                               name='email' value={email}
                               onChange={setEmail}
                               variant="outlined"
                               size={'medium'}
                               placeholder={translate(EDictionaryKey.EnterYourEmail)}/>
                    <TextField onKeyDown={handleKeyDown} name='telegram' error={hasError}
                               value={telegramNickname}
                               onChange={setTelegramNickname}
                               variant="outlined"
                               size={'medium'}
                               placeholder={translate(EDictionaryKey.TelegramNickname)}/>
                </Form>
                <SignInButton disabled={isLoading} onClick={handleSubmit}>
                    {translate(EDictionaryKey.SignUp)}
                </SignInButton>
            </FormWrapper>
            <FormFooter>
                <FooterInfo variant={'caption'}>
                    {translate(EDictionaryKey.AlreadyHaveAnAccount)}
                </FooterInfo>
                <FooterLink onClick={handleSetLoginMode} variant={'body1'}>
                    {translate(EDictionaryKey.SignIn)}
                    <Icon activeCursor={true} name={'LinkArrow'}/>
                </FooterLink>
            </FormFooter>
        </FormContainer>
    )
}