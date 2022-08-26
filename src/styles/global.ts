import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  html::-webkit-scrollbar {
    width: 10px;
  }

  html::-webkit-scrollbar-track {
    background: rgb(179, 177, 177);
    border-radius: 10px;
  }

  html::-webkit-scrollbar-thumb {
    background: rgb(136, 136, 136);
    border-radius: 10px;
  }

  html::-webkit-scrollbar-thumb:hover {
    background: rgb(100, 100, 100);
    border-radius: 10px;
  }

  html::-webkit-scrollbar-thumb:active {
    background: rgb(68, 68, 68);
    border-radius: 10px;
  }

  body {
    height: 100vh;
    width: 100%;
    top: 0px;
    left: 0px;


    background-position: bottom !important;
    background-repeat: no-repeat;
    background-attachment: fixed !important;
    opacity: 1;
    -webkit-font-smoothing: antialiased;

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      margin: 0;
    }
  }

  #root {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;


    .App {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
