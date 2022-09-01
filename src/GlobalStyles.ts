import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #121212;
  --text: #fff;
  --purple: #6a20bd;
  --blue: #1c20e2;
}
    * {
      box-sizing: border-box;
      outline: 0;
      word-break: unset !important;
      line-height: normal;
      font-family: 'Poppins', sans-serif;
      background: var(--background);
      color: var(--text)
    }

    body, input , button {
      font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
      font-size: 12px;
      margin: 0;
    }

    button {
      cursor: pointer;
    }
`;
