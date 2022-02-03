import React from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import { HashRouter, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {

  return (
    <HashRouter>

      <Navbar/>

      <Routes>
         <Route path="/" element={<HomePage/>}/> 
         <Route path="/about" element={<AboutPage/>}/> 
      </Routes>
      
    </HashRouter>
  )
}

export default App;
