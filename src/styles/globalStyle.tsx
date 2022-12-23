import "@fontsource/sirin-stencil";
import "@fontsource/kaushan-script";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
${
  "" /* *{
    outline: 1px solid red !important;
}  */
}
html.has-scroll-smooth {
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;  
}
*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: "Sirin Stencil";
    overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
.c-scrollbar_thumb {
    opacity: 0;
} 
*{
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
*::-webkit-scrollbar {
    width: 0px;
}
`;

export default GlobalStyles;
