import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,300&display=swap');

body {
    font-family: 'Barlow', sans-serif;
    }
    *{
        margin:0;
        padding:0;
    }
`;

export default GlobalStyle;