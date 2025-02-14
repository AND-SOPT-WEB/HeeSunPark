import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
        font-family: 'SUIT-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2')
          format('woff2');
        font-weight: normal;
        font-style: normal;
      }

*{
    margin: 0;
    padding: 0;
}

body {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: 'SUIT-Regular';
    font-size: 62.5%;
}

button {
    border: none;
    font-family: 'SUIT-Regular';
}


`;

export default GlobalStyle;
