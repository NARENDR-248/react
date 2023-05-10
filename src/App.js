import React from 'react'
import Home from './componets/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './componets/Login'
import Sinup from './componets/Sinup'
import Avathar from './Avathar'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' exact Component={Home} />
          <Route path='/login' exact Component={Login} />
          <Route path='/sinup' exact Component={Sinup} />
          <Route path='/Avathar' exact Component={Avathar} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
