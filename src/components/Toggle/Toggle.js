import React from 'react'
import { func, string } from 'prop-types';
import { ReactComponent as MoonIcon } from '../../icons/moon.svg';
import { ReactComponent as SunIcon } from '../../icons/sun.svg';
import { ToggleContainer } from './Toggle.styled';
import { THEME } from "../../global/enums";

export default function Toggle ({ theme, toggleTheme }) {
  const isLight = theme === THEME.LIGHT;

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
