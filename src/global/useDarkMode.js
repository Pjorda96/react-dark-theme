import { useEffect, useState } from 'react';
import { THEME } from "./enums";

const lsItemName = 'theme';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(THEME.LIGHT);
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem(lsItemName, mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    if (theme === THEME.LIGHT) {
      setMode(THEME.DARK);
    } else {
      setMode(THEME.LIGHT);
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem(lsItemName);

    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
      setMode(THEME.DARK) :
      localTheme ?
        setTheme(localTheme) :
        setMode(THEME.LIGHT);

    setComponentMounted(true);
  }, [])

  return [theme, toggleTheme, componentMounted];
};
