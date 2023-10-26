import React from "react";
import { getDesignTokens } from "../Style/Theme";
import { createTheme, Grid } from "@mui/material";
import { useState, useEffect, createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material";

const ColorModeContextMyTheme = createContext();

const ColorModeContextProvider = ({ children }) => {
  const themeLocalStorageKey = localStorage.getItem("theme");

  const storage = ["light", "dark"].includes(themeLocalStorageKey)
    ? themeLocalStorageKey
    : "light";

  const [mode, setMode] = React.useState(storage);
  const [storageTheme, setStorageTheme] = useState(storage);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: (isDark = false) => {
        setMode(isDark ? "light" : "dark");
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  useEffect(() => {
    localStorage.setItem("theme", mode);
    setStorageTheme(mode);
  }, [mode, storageTheme, theme]);

  const value = { colorMode, theme };

  return (
    <ColorModeContextMyTheme.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContextMyTheme.Provider>
  );
};
export const useColorModeContex = () => {
  return useContext(ColorModeContextMyTheme);
};

export default ColorModeContextProvider;
