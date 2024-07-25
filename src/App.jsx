import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Homepage from './components/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Navbar/> 
     {/* <Homepage/> */}
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/s' element={<Signup/>}/> 
      <Route path='/l' element={<Login/>}/> 
      
     </Routes>
    </>
  )
}

export default App
