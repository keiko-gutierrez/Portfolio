import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Box,
  Text,
  VStack,
  Grid
} from '@chakra-ui/react'

import NaviBar from './functions/NaviBar'
import Header from './functions/Header'
import Footer from './functions/Footer'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
// import Request from './pages/Request'
import Home from './pages/Home'

function App () {
  return (
    <>
      <Header />
      <div>
        <NaviBar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/portfolio/:id' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/request' element={<Request />} /> */}
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
