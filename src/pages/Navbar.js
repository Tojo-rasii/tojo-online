import { React, useState } from 'react'
import { NavLink } from "react-router-dom";


function Navbar() {
  const [active, setActive] = useState(false);
  const togg = () => {
    setActive(!active)
  }
  return (
    <div>
      <div className='nav_pc'>
        <header id='nav' className='navbar fixed-top shadow-sm d-flex flex-row justify-content-between p-2 pe-5'>
          <NavLink to="/" style={{textDecoration:'none'}}><div className='logo pt-1'>
            <p className='para-T h2 fw-bold fs-3'><span className=' fs-2'>T</span><span className='text-danger mt-1 position-absolute'>R.</span></p>
          </div></NavLink>
          <nav>
            <section className='nav-section d-flex flex-row gap-4 mt-3 fs-6'>
              <NavLink to="/" style={{textDecoration:'none'}} className={(nav) => (nav.isActive ? "nav-active" : "")}><article>
                <p>Accueil</p>
              </article></NavLink>
              <NavLink to="/Services" style={{textDecoration:'none'}} className={(nav) => (nav.isActive ? "nav-active" : "")}><article>
                <p >Services</p>
              </article></NavLink>

              <NavLink to="/apropos" style={{textDecoration:'none'}} className={(nav) => (nav.isActive ? "nav-active" : "")}><article>
                <p >A propos</p>
              </article></NavLink>

              <NavLink to="/contact" style={{textDecoration:'none'}} className={(nav) => (nav.isActive ? "nav-active1" : "")}><article className='nav-4'>
                <button className='button btn btn-danger fw-semibold shadow-sm'>Contact</button>
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
