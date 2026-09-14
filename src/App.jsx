import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Partner from './pages/Partner.jsx'
import About from './pages/About.jsx'

function App() {

  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/partner' element={<Partner/>}/>
    </Routes>
  )
}

export default App
