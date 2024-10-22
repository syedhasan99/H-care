import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App