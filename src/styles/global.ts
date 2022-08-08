import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {

    box-sizing: border-box;
    font-family: 'Montserrat', Helvetica, Tahoma, Arial Black,Verdana, sans-serif;
    text-shadow: ${({ theme }) => theme.effect.textShadow};

    padding: 0;
    margin: 0;

    scrollbar-color:${({ theme }) => theme.color.main.background},
    ${({ theme }) => theme.color.main.selection};
  }

  @supports (scrollbar-color: ${({ theme }) => theme.color.main.selection}
  ${({ theme }) => theme.color.main.selection}) {

    scrollbar-color: ${({ theme }) => theme.color.main.background},
    ${({ theme }) => theme.color.main.selection};
  }

  &::-webkit-scrollbar {

    width: 1.5rem;
    height: 0;

    margin: 0;
  }
  &::-webkit-scrollbar-track {
    margin: 0;

    background: ${({ theme }) => theme.color.main.selection};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.main.background};
    border-radius: ${({ theme }) => theme.metric.borderRadius};
    border:solid .4rem ${({ theme }) => theme.color.main.selection};

    &:hover {

      border: solid .15rem ${({ theme }) => theme.color.main.selection};
    }

    @media (max-width: 999px) {

      border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
    }
  }

  &::selection {

    background: ${({ theme }) => theme.color.main.selection};
    color: ${({ theme }) => theme.color.main.textColor};
  }

  :root {

    background:  ${({ theme }) => theme.color.main.background};
    font-size: 62.5%;
  }

  #root {

    height: 100%;
  }

  #navigation-root {

    display: flex;
    align-items: flex-end;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 95vh;
    max-height: 100vh;
    max-width: 100vw;

    z-index: 1000;
    pointer-events: none;

    @media (max-width: 595px) {

      height: 87.2vh;
    }
  }

  body {

    color: ${({ theme }) => theme.color.main.textColor};
    font-size: 1.6rem;
    font-weight: 500;
  }

  a,
  button {

    border: none;
    text-decoration:none;
    cursor: pointer;

    @media (max-width: 999px) {

      cursor: default;
    }
  }

  li {

    list-style: none;
  }

  img,
  .no-select {

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  img,
  .no-events {

    pointer-events: none;
  }

  &:focus{

    outline: none;
    box-shadow: 0 0 0  .25vw ${({ theme }) => theme.color.cold.blue} ;
  }

  button#main-content {

    box-shadow: none;

    &:focus, &:active, &:hover {

      box-shadow: none !important;
    }
  }

  input,
  textarea {

    &::selection {

      background: ${({ theme }) => theme.color.cold.blue};
      color: ${({ theme }) => theme.color.main.textColor};
    }
  }
`

export default GlobalStyles
