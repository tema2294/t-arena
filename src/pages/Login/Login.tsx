import {iconNames} from "components/Icon";
import {createOption, Select} from "components/Select";
import {ELanguage, useLocalization} from "hocs/Localization";
import {LANGUAGE_NAME} from "hocs/Localization/Localization.constants";
import {THEME_MODE, useTheme} from "hocs/Theme";
import {LoginForm, RegisterForm} from "pages/Login/component";
import {useMemo} from 'react';
import {useSearchParams} from "react-router-dom";
import {ISelectOption} from "redux-store/api";
import {
    ControlBar,
    FooterText,
    Header,
    IconGlobe,
    LoginContent,
    LoginPage,
    LogoIcon,
    SelectContainer,
    ThemeIcon
} from "./Login.styles";

export const Login = () => {
    const {setLanguage, language} = useLocalization();
    const {toggleTheme, mode} = useTheme()
    const [searchParams, setSearchParams] = useSearchParams();
    const isRegistrationMode = searchParams.get('mode') === 'registration';
    const themeIconName: keyof typeof iconNames = mode === THEME_MODE.light ? 'Sun' : 'Moon';
    const selectLanguageValue = createOption(language, LANGUAGE_NAME[language]);
    const selectLanguageOptions = useMemo(() => Object.entries(LANGUAGE_NAME).map(([languageId, languageName]) => createOption(languageId, languageName)), [language])

    const CurrentForm = useMemo(() => isRegistrationMode ? RegisterForm : LoginForm, [isRegistrationMode]);

    const handleClearSearchParams = (): void => {
        setSearchParams({})
    }

    const handleChangeLanguage = (nextLanguage: ISelectOption) => {
        setLanguage(nextLanguage.id as ELanguage);
    }

    return (
        <LoginPage>
            <LoginContent>
                <Header>
                    <LogoIcon activeCursor={true} onClick={handleClearSearchParams} name={'Logo'}/>
                    <ControlBar>
                        <SelectContainer>
                            <IconGlobe name={'Globe'}/>
                            <Select options={selectLanguageOptions}
                                    name={selectLanguageValue.name} value={selectLanguageValue}
                                    handleChange={handleChangeLanguage}/>
                        </SelectContainer>
                        <ThemeIcon activeCursor={true} onClick={toggleTheme} name={themeIconName}/>
                    </ControlBar>
                </Header>
                <CurrentForm/>
                <FooterText variant={'caption'}>
                    © TradeArena 2024
                </FooterText>
            </LoginContent>
        </LoginPage>
    );
}