import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./blocks/Header/Header";
import Content from "./Content";


function App() {

  return (
      <>
        <Header userName={'UserName'} />
        <Content />
      </>
  )
}

export default App
