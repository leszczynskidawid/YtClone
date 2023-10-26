import React from "react";
import { HomePage } from "./Page/HomePage";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Helpers/routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}
export default App;
