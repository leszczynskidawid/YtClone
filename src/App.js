import React from "react";
import { Navbar } from "./Components/Navbar";
import AuthContextProvider from "./Context/AuthContext";
import { PersistentDrawerRight } from "./Drawer";
import ColorModeContextProvider from "./Context/modeContext";
import { HomePage } from "./Page/HomePage";

function App() {
  return (
    <AuthContextProvider>
      <ColorModeContextProvider>
        <HomePage />
      </ColorModeContextProvider>
    </AuthContextProvider>
  );
}
export default App;
