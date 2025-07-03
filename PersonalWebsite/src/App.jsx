import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Work from './pages/Work'
import Projects from './pages/Projects'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <div className='bg-[#578E87]'>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="bg-red-500 p-4 text-white text-center">FOOTER TEST</div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

