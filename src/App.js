import React from "react";
import { Navbar } from "./Components/Navbar";
import { theme } from "./Style/Theme";
import { ThemeProvider } from "@mui/material";
import { SearchInput } from "./Components/SearchInput";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
};
export default App;
