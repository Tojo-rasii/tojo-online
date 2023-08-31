import { React, useState } from 'react'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';

function Navbar() {
  const [active, setActive] = useState(false);
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
          moon.style.display ="none";
          sun.style.display ="block";
          div.classList.add('dark-mode1');
        } else {
          body.classList.remove('dark-mode');
          moon.style.display ="block";
          sun.style.display ="none";
          div.classList.remove('dark-mode1');
        }
      }, [isDarkMode]);
    
      const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
      };
  const togg = () => {
    setActive(!active)
  }
  return (
    <div>
      <div className='nav_pc'>
        <header id='nav' className='navbar fixed-top shadow-sm d-flex flex-row justify-content-between p-2'>
          <NavLink to="/" style={{textDecoration:'none'}} title='line'><div className='logo pt-1'>
            <p className='para-T h2 fw-bold fs-3'><span className=' fs-2'>T</span><span className='text-danger mt-1 position-absolute'>R.</span></p>
          </div></NavLink>
          <nav>
            <section className='nav-section d-flex flex-row gap-4 mt-3'>
              <NavLink to="/" style={{textDecoration:'none'}} className={(nav) => (nav.isActive ? "nav-active" : "")}><article>
                <p>Accueil</p>
              </article></NavLink>
              <NavLink to="/Services" style={{textDecoration:'none'}} className={(nav) => (nav.isActive ? "nav-active" : "")}><article>
                <p >Services</p>
              </article></NavLink>

              <NavLink to="/apropos" style={{textDecoration:'none'}} className={(nav) => (nav.isActive ? "nav-active" : "")}><article>
                <p >Apropos</p>
              </article></NavLink>

              <NavLink to="/contact" style={{textDecoration:'none'}} className={(nav) => (nav.isActive ? "nav-active" : "")}><article className='nav-4'>
                <button className='button btn btn-danger fw-semibold shadow-sm'>Contact</button>
              </article></NavLink>

              <NavLink><article className='nav-4'>
                <i className='bi-moon-stars fs-4' id="moon" onClick={toggleDarkMode}></i>
                <i className='bi-sun fs-4' id="sun" onClick={toggleDarkMode}></i>
              </article></NavLink>
            </section>
            {/* <div style={{ display: active ? "block" : "none" }}>
              <p className='p-light bi-sun position-absolute mt-1 text-warning fs-4 rounded-1 bg-light shadow-lg ps-3 pe-4 pb-2' onClick={() => {

              }}>&nbsp;<span className='fs-6 fw-semibold text-dark'>Light</span></p>
              <p className='p-dark bi-moon position-absolute text-info fs-4 rounded-1 bg-light shadow-lg ps-3 pe-4 pb-2' onClick={() => {

              }}>&nbsp;<span className='fs-6 fw-semibold text-dark' onClick={togg} >Dark</span></p>
            </div> */}
          </nav>
        </header>
      </div>
      {/* Navbar-mobile */}
      <nav className='nav_mobile'>
        <p><i className='bi-list rounded-2 bg-body-secondary'></i></p>
      </nav>
    </div>
  )
}

export default Navbar
