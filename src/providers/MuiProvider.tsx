"use client";
import { customColors } from "@/lib/mui";
import { ProviderProps } from "@/types/provider";
import { ThemeProvider, createTheme } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

declare module "@mui/material/styles" {
  interface TypeText {
    muted: string;
    light: string;
    success: string;
    danger: string;
    alert: string;
    grayText1: string;
  }

  interface TypeBackground {
    light: string;
    gray: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    lightGray: string;
    overlay: string;
  }
}

const {
  primaryColor,
  secondaryColor1,
  textColor,
  secondTextColor,
  successTextColor,
  lightTextColor,
  mutedColor,
  lightBackgroundColor,
  dangerColor,
  disabledTextColor,
  grayColor,
  grayColor1,
  grayColor2,
  grayColor3,
  grayColor4,
  lightGrayColor,
  grayTextColor,
  alertTextColor,
  overlayColor,
} = customColors;

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiStack: {
      defaultProps: {
        direction: "row",
        alignItems: "center",
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: "span",
          body2: "p",
        },
      },
    },
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor1,
    },
    text: {
      primary: textColor,
      secondary: secondTextColor,
      light: lightTextColor,
      muted: mutedColor,
      success: successTextColor,
      danger: dangerColor,
      disabled: disabledTextColor,
      grayText1: grayTextColor,
      alert: alertTextColor,
    },
    background: {
      light: lightBackgroundColor,
      gray: grayColor,
      gray1: grayColor1,
      gray2: grayColor2,
      gray3: grayColor3,
      gray4: grayColor4,
      lightGray: lightGrayColor,
      overlay: overlayColor,
    },
  },
  typography: {
    h2: {
      fontFamily: "inherit",
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontFamily: "inherit",
      fontSize: 24,
      fontWeight: 700,
    },
    h4: {
      fontFamily: "inherit",
      fontSize: 20,
      fontWeight: 400,
    },
    h5: {
      fontFamily: "inherit",
      fontSize: 16,
      fontWeight: 700,
    },
    h6: {
      fontFamily: "inherit",
      fontSize: 14,
      fontWeight: 700,
    },
    body1: {
      fontFamily: "inherit",
      fontSize: 14,
      fontWeight: 400,
    },
    body2: {
      fontFamily: "inherit",
      fontSize: 14,
      fontWeight: 400,
    },
    allVariants: {
      fontFamily: "inherit",
      fontSize: 14,
    },
  },
});
export default function MuiProvider({ children }: ProviderProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
