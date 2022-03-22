import { ThemeProvider } from "styled-components";
import React from "react";

const lightTheme = {
	colors: {
		main: "#48846b",
		dark: "#242625",
		light: "#d4d0c1",
		absoluteDark: "#242625",
		absoluteLight: "#d4d0c1",
	},
	fonts: { main: "Montserrat, sans-serif" },
};

const darkTheme = {
	colors: {
		main: "#48846b",
		dark: "#d4d0c1",
		light: "#242625",
		absoluteDark: "#242625",
		absoluteLight: "#d4d0c1",
	},
	fonts: { main: "Montserrat, sans-serif" },
};

const Theme = ({ children, variation }) => {
	return (
		<ThemeProvider theme={variation === "dark" ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	);
};

export default Theme;
