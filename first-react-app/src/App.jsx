import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'

function App() {

  return(
    //importing the component in the root component - 'app.jsx'
     // shorthand is "<Header/>"
    <>
      
      <Header></Header> 
      <Food/>
      <Food/>
      <Footer/>
    </>

    
  );

}

export default App
