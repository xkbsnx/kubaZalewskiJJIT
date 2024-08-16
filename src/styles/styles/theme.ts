import { createTheme } from "@mui/material/styles";

import { Primary, Grey, Error, Disabled } from "./colors";

const theme = createTheme({
  palette: {
    primary_: Primary,
    grey_: Grey,
    error_: Error,
    disabled: Disabled
  }
})

interface PrimaryColors {
  primary: string;
  primary_dark: string;
  primary_light: string;
}

interface GreyColors {
  grey_100: string;
  grey_200: string;
  grey_300: string;
  grey_400: string;
}

interface ErrorColors {
  error: string;
}

interface DisabledColors {
  disabled: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    primary_: PrimaryColors,
    grey_: GreyColors,
    error_: ErrorColors,
    disabled: DisabledColors
  }

  interface PaletteOptions {
    primary_?: PrimaryColors,
    grey_: GreyColors,
    error_: ErrorColors,
    disabled: DisabledColors
  }
}