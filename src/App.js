import React from "react";
import { Theme } from "./Style/Theme";
import { PersistentDrawerRight } from "./Drawer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Theme>
      <PersistentDrawerRight />
    </Theme>
  );
}
export default App;
