import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../global/theme';
import { GlobalStyles } from '../global/global';
import { THEME } from '../global/enums';
import Toggle from "./Toggle";
import { useDarkMode } from "../global/useDarkMode";

export default function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  // const themeMode = theme === THEME.LIGHT ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={theme === THEME.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />

        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === THEME.LIGHT ? 'light theme' : 'dark theme'}!</h1>
        <footer>
          <span>Credits:</span>
          <small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
          <small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
        </footer>
      </>
    </ThemeProvider>
  );
}
