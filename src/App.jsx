import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Sport from './component/Sport'
import Entertainment from './component/Entainment'

const App = () => {
  return (
    <div >
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sport />} />
        <Route path="/entertainment" element={<Entertainment />} />

      </Routes>

     
      
    </div>
  )
}

export default App
