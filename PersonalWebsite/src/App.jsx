import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'

function App() {

  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    <AboutMe/>
    </>
  )
}

export default App
