import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StockDetails from './Components/StockDetails'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          {/* <Route path='/StockDetails:symbol' element={<StockDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App