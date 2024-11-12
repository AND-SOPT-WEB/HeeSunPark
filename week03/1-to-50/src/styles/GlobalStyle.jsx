import { Global, css } from '@emotion/react';
import resetStyle from '@itkyk/emotion-reset-style';

export const GlobalStyles = () => (
  <Global
    styles={(theme) => css`
      ${resetStyle}

      @font-face {
        font-family: 'SUIT-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2')
          format('woff2');
        font-weight: normal;
        font-style: normal;
      }

      * {
        margin: 0;
        padding: 0;
      }

      body {
        font-family: 'SUIT-Regular', sans-serif;
        background-color: ${theme.colors.lightblue};
      }

      button {
        border: none;
        font-family: 'SUIT-Regular';
      }
    `}
  />
);
