import React from 'react'
import Navbar from './components/Navbar'
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import "./App.css"


const App = () => {
  return (
    <div>
    <Navbar/>

    <Routes>
    <Route exact path='/' element ={<Home/>}/>
    <Route path='/about' element ={<About/>}/>
    <Route path='/contact' element ={<Contact/>}/>
    <Route path='/login' element ={<Login/>}/>    
    <Route path='/signup'  element ={<Signup/>}/>
    

    </Routes>
    
    
    </div>
  )
}

export default App