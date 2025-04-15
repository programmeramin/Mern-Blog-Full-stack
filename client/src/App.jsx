import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About"
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Header from './components/Header';
import NotFound from './components/NotFound';
import FooterComponent from './components/Footer';

function App() {
  
  return (
    <>
      
      <BrowserRouter>
           <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>

    </>
  )
}     

export default App
  