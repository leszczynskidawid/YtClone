import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing:border-box;
  background-color:#0f0f0f;
  padding:0 20px;


}
`;
export { GlobalStyle };
