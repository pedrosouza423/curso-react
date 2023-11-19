import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
    }

    body {
        background-color: #333;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme['gray-900']};
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
