import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { themeContext } from "../contexts/themeContext";
import { LangProvider } from "../contexts/langContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeContext}>
      <LangProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
