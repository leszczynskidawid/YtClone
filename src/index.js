import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./Style/GlobalStyle/index";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import ColorModeContextProvider from "./Context/modeContext";
import MenuOpenAnchorElProvider from "./Context/menuOpenContex";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <BrowserRouter>
      <AuthContextProvider>
        <ColorModeContextProvider>
          <MenuOpenAnchorElProvider>
            <App />
          </MenuOpenAnchorElProvider>
        </ColorModeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
