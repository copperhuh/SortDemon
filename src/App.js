import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import SortSettings from "./components/SortSettings";
import Theme from "./Theme";
import Main from "./components/Main";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Descriptions from "./components/Descreptions/Container";

const GlobalStyles = createGlobalStyle`
html, body{
  overflow-x: hidden;
  max-width: 100%;
  scroll-behavior: smooth;
}
button{
  user-select: none;
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
    background: ${(props) => props.theme.colors.light};
    
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
  `;
function App() {
	return (
		<Theme>
			<Provider store={store}>
				<GlobalStyles />

				<Header />
				<SortSettings />
				<Main />
				<Descriptions />
			</Provider>
		</Theme>
	);
}

export default App;
