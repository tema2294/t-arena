import {TypographyStyleOptions} from "@mui/material/styles/createTypography";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        body500: TypographyStyleOptions;
        body14_400: TypographyStyleOptions;
        body14_600: TypographyStyleOptions;
        pageSubtitle: TypographyStyleOptions;
    }

    interface TypographyVariantsOptions {
        body500?: TypographyStyleOptions;
        body14_400?: TypographyStyleOptions;
        body14_600?: TypographyStyleOptions;
        pageSubtitle?: TypographyStyleOptions;
    }

    interface Palette {
        custom: {
            [key: string]: Record<string, string>
        };
    }

    interface PaletteOptions {
        custom: {
            [key: string]: Record<string, string>
        };
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body500: true;
        body14_400: true;
        body14_600: true;
        pageSubtitle: true;
    }
}