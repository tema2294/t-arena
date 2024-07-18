import {Button, styled, Typography} from "@mui/material";

export const FormContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    height: 'fit-content',
    width: 440,
    padding: '56px 40px',
    background: 'var(--bg-color)',
    borderRadius: 16,
}))

export const FormWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
}))
export const FormFooter = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: 4,
    alignItems: 'center',
}))

export const FooterInfo = styled(Typography)(({theme}) => ({
    fontSize: 14,
    color: 'var(--text-color)',
}))

export const FooterLink = styled(Typography)(({theme}) => ({
    color: 'var(--accent-color)',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    cursor: 'pointer',
    lineHeight: '16px',
}))

export const FormTitle = styled(Typography)(({theme}) => ({
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '38px'
}))
export const Form = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 24,


    '& .MuiInputBase-root': {
        transition: 'border-color 100ms ease-out',
        height: 56,
        borderRadius: 9,
        border: '1px solid var(--field-placeholder-color)',

        '& fieldset': {
            border: 'none',
        },
        '&.Mui-focused': {
            border: '1px solid var(--accent-color)',
        },
    },
    '& .Mui-error': {
        border: '1px solid #d32f2f',
    },

    '& .MuiInputBase-input': {
        fontSize: 16,
        '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus': {
            boxShadow: 'none !important',
            WebkitTextFillColor: 'var(--field-placeholder-color)',
            WebkitBoxShadow: `0 0 0px 1000px var(--bg-color) inset`,
            transition: 'background-color 5000s ease-in-out 0s',
            caretColor: 'var(--field-placeholder-color)',
        },
    },
}))

export const SignInButton = styled(Button)(({theme}) => ({
    width: '100%',
    background: 'var(--btn-primary-bg-color)',
    borderRadius: 9,
    color: 'var(--btn-primary-color)',
    fontSize: 16,
    fontWeight: 600,
    padding: '12px 20px',
    lineHeight: '24px',
    textTransform: 'none',
    '&:hover': {
        background: 'var(--btn-primary-bg-hover-color)',
        color: 'var(--btn-primary-color)',
    },
    '&:disabled': {
        color: 'var(--btn-primary-color)',
    }
}))