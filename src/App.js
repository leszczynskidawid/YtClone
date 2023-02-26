import React from "react";
import { Navbar } from "./Components/Navbar";
import { theme } from "./Style/Theme";
import { ThemeProvider } from "@mui/material";
import AuthContextProvider from "./Context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </AuthContextProvider>
  );
};
export default App;
