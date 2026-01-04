import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Sport from './component/Sport'

const App = () => {
  return (
    <div >
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sport />} />

      </Routes>

     
      
    </div>
  )
}

export default App
