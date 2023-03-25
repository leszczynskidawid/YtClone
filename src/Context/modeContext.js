import React from "react";
import { getDesignTokens } from "../Style/Theme";
import { createTheme, Grid } from "@mui/material";
import { useState, useEffect, createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material";

const ColorModeContextMyTheme = createContext();

const ColorModeContextProvider = ({ children }) => {
  const storage = typeof window !== "undefined" ? localStorage.theme : "light";
  const [mode, setMode] = React.useState(storage);
  const [storageTheme, setStorageTheme] = useState(storage);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
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
