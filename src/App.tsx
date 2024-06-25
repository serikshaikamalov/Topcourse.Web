import "./scss/index.scss";
import AppRouter from "router";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import themeState from "states/themeEventTarget";

export const startDay = "15 Тамыз";

const App = () => {
  const [mode, setMode] = useState<any>(themeState.theme)

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: mode
      }
    })
  }, [mode])

  useEffect(() => {
    if (themeState.theme) {
      document.querySelector('html')?.setAttribute('data-theme', themeState.theme)
      setMode(themeState.theme)
    }

    themeState.addEventListener('theme', (e) => {
      if (e instanceof CustomEvent) {        
        document.querySelector('html')?.setAttribute('data-theme', e.detail)
        setMode(e.detail)
      }
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
