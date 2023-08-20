import './App.css';
// import Footer from './components/Footer';
// import React, {useState} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import {useState,React} from 'react'
import Accueil from './components/Accueil';
import Services from './components/Services';
import Apropos from './components/Apropos';
import Contact from './components/Contact';
import Curriculum_Vitae from './components/Curriculum_Vitae';
import Exploits from './components/Exploits';
import Profile from './components/Profile';
import Loading from './components/Loading';


function App() {
  return (
    <>
    <div>
     <BrowserRouter>
      <Routes>
      <Route path="/" Component={Accueil} />
      <Route path="/services" Component={Services} />
      <Route path="/apropos" Component={Apropos} />
      <Route path="/contact" Component={Contact} />
      <Route path="/cv" Component={Curriculum_Vitae} />
      <Route path="/exploits" Component={Exploits} />
      <Route path="/profile" Component={Profile} />
      <Route path="/Loading" Component={Loading} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
};

export default App;
