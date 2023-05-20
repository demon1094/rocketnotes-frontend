import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', sans-serif;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`