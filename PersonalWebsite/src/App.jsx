import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Work from './pages/Work'
import Projects from './pages/Projects'
import { BrowserRouter, Routes, Route } from "react-router"
import ContactForm from './components/ContactForm'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <div className='bg-[#0d1117]'>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

