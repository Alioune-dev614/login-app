import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}>   </Route>
        <Route path='/login' element={<Login/>}>   </Route>
        <Route path='/home' element={<h1>Welcome to Home Page</h1>}>   </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
