import { createTheme } from "@mui/material/styles";
import { esES } from "@mui/material/locale";
import { grey, amber } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    primary?: {
      main?: string;
    };
    secondary?: {
      main?: string;
    };
  }
}

export const themeContext = createTheme(
  {
    palette: {
      primary: {
        main: amber[500],
      },
      secondary: {
        main: grey[400],
        light: grey[200],
        dark: grey[600],
      },
    },
    typography: {
      subtitle2: {
        fontSize: 12,
        color: grey[600],
      },
      body1: {
        fontWeight: 500,
      },
      overline: {
        fontSize: 15,
        color: grey[800],
      },
    },
    spacing: 10,
  },
  esES
);

export default themeContext;
