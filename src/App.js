import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import SortSettings from "./components/SortSettings";
import Theme from "./Theme";
import Main from "./components/Main";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Descriptions from "./components/Descreptions/Container";
import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
}
html, body{
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 100%;
  scroll-behavior: smooth;
  box-sizing: border-box;
}
button{
  user-select: none;
}
.open-modal-1, .open-modal-2{
  overflow: hidden;
  padding-right: 10px !important;
}
button, a{
  transition: all 0.2s;
  
  &:hover, &:focus, a{
    transition: all 0.2s;
  }
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    font-family: 'Montserrat', sans-serif;
    background: ${(props) => props.theme.colors.dark};
    overflow-x: hidden;
    
    &::-webkit-scrollbar{
      width: 10px;
    }
    &::-webkit-scrollbar-track{
      background: ${(props) => props.theme.colors.dark};
    }
    &::-webkit-scrollbar-thumb{
      width: 7px;
      background: ${(props) => props.theme.colors.main};
      border-radius: 5px;
    }
  }
  #root{
    height: 100%;
    width: 100%;
  }
  ::-moz-selection {
    background: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.light};
  }
  ::-webkit-selection {
    background: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.light};
  }
  ::selection {
    background: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.light};
  }

  @media (max-width: 720px) {
    html{
      font-size: 14px;
    }
  }
  @media (max-width: 630px) {
    html{
      font-size: 12px;
    }
  }
  `;
function App() {
	const [themeVariation, setThemeVariation] = React.useState("light");
	const [width, setWidth] = React.useState(window.innerWidth);

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);

		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	const toggleTheme = () => {
		setThemeVariation((prevTheme) =>
			prevTheme === "light" ? "dark" : "light"
		);
	};
	return (
		<Theme variation={themeVariation}>
			<Provider store={store}>
				<GlobalStyles />

				<Header theme={themeVariation} toggleTheme={toggleTheme} />
				<SortSettings />
				<Main width={width} />
				<Descriptions width={width} />
				<Footer />
			</Provider>
		</Theme>
	);
}

export default App;
