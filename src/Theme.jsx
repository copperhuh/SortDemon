import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
    colors: {
        main: '#48846b',
        dark: '#242625',
        light: '#d4d0c1',
    },
    fonts: { main: "Montserrat, sans-serif" }
}

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{ children }</ThemeProvider>
}

export default Theme