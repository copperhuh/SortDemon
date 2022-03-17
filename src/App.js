import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import SortSettings from './components/SortSettings'
import Theme from './Theme'
import Main from './components/Main'
import React, { useEffect } from 'react'
import { getShuffledArr } from './utils'
import { Provider } from 'react-redux'
import {store} from './redux/Store'

class Ctx {
  constructor(){
    this.size = 5
    this.speed = 100
    this.shuffleType = 'random'
    this.sortingOngoing = false
    this.baseArr = getShuffledArr(this.size)
    this.shuffle = () => {
      this.baseArr = getShuffledArr(this.size) 
      // console.log(this.baseArr)
    }
    
  }
};

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
  
  #root{
    height: 100%;
    width: 100%;
  }
`

function App() {

  return (
    <Theme>
      <Provider store={store}>

        <GlobalStyles/>
        
        <Header />
        <SortSettings/>
        <Main/>
      </Provider>
    </Theme>
  )
}

export default App