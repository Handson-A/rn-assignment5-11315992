// /src/context/ThemeContext.js
import React, { createContext, useState } from 'react';
import { lightTheme, darkTheme } from '../constants/themes';

// Create the ThemeContext with default values
export const ThemeContext = createContext({
  theme: lightTheme, // Default to light theme
  toggleTheme: (isEnabled) => {isDarkMode}, // Default function (no-op)
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme); // Default theme state

  // Function to toggle between light and dark theme
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;


