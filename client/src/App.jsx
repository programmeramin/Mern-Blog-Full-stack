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
import Footer from './components/Footer';
import NotFound from './components/NotFound';

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
          <Route path='/project' element={<Project/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}     

export default App
  