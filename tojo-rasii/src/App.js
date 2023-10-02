import './App.css';
import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import Services from './components/Services';
import Apropos from './components/Apropos';
import Contact from './components/Contact';
import Curriculum_Vitae from './components/Curriculum_Vitae';
import Exploits from './components/Exploits';
import Profile from './components/Profile';
import Loading from './components/Loading';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import svg from '../src/tools/svg/spin.svg'

function App() {
  const [showButton, setShowButton] = useState(false);
  const [active, setActive] = useState(false);
  const [langueActive, setLangueActive] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chargement, setChargement] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  //dark-mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    //body all
    const body = document.body;
    const div = document.querySelector('div');
    //navbar
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");
    //home
    if (isDarkMode) {
      body.classList.add('dark-mode');
      moon.style.display = "none";
      sun.style.display = "block";
      div.classList.add('dark-mode1');
    } else {
      body.classList.remove('dark-mode');
      moon.style.display = "block";
      sun.style.display = "none";
      div.classList.remove('dark-mode1');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const togg = () => {
    setActive(!active)
  }

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    setChargement(true);
    const trsl = document.getElementById("trsl");
    trsl.style.display = "none";
    setTimeout(() => {
      i18n.changeLanguage(lng);
      setLangueActive(lng);
      setChargement(false);
    }, 1800);
  };
  const { t } = useTranslation();

  return (
    <>
      <div>
      {chargement && 
      <div className='loading'>
        <picture>
          <img src={svg} alt="loading" />
        </picture>
        </div>}
        <article className='nav-4 mt-5 dark1'>
          <i className='bi-translate fs-4' id='translate_icon' onClick={togg}></i>
          <section className='translate shadow-lg' id='trsl' style={{ display: active ? "block" : "none" }}>
            <article>
              <span>
                <p onClick={() => changeLanguage('en')}  style={{ color: langueActive === 'en' ? 'red' : '' }}>
                Anglais (US)</p>
              </span>
              <span>
                <p onClick={() => changeLanguage('fr')} style={{ color: langueActive === 'fr' ? 'red' : '' }}
          >Francais (FR)</p>
              </span>
            </article>
          </section>
          <i className='bi-moon-stars text-primary fs-4' id="moon" onClick={toggleDarkMode}></i>
          <i className='bi-sun fs-4' id="sun" onClick={toggleDarkMode}></i>
        </article>
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
        {/* Scroll to top button */}
        {showButton && (
          <button className="scroll-to-top-button rounded-circle shadow-sm float-end" onClick={scrollToTop}>
            <i className='bi-chevron-up fs-5'></i>
          </button>
        )}

      </div>
    </>
  );
};

export default App;
