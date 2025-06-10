import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Work from './pages/Work'

function App() {

  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    <Work/>
    </>
  )
}

export default App
