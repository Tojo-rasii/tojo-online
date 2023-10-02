import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <>
      <main className='footer bottom-fixed w-100'>
        <footer className='d-flex flex-column'>
            <section className='mt-2 ms-5 me-5 ps-5 pe-5 p-lg-3' id='mobile-footer'>
                <article>
                <strong class="fs-5 para-danger para-line">Contact</strong>
                <div className='mt-2'>
                        <p className='mt-4 fs-6'><i className='bi-geo-alt text-primary rounded-circle p-1 me-1 fs-5'></i>&nbsp;Antananarive, MADAGASCAR</p>
                        <p className='mt-4 fs-6'><i className='bi-telephone p-1 text-primary rounded-circle me-1 fs-5'></i>&nbsp;+261349865752,+261344856365</p>
                        <p className='mt-4 fs-6'><i className='bi-envelope p-1 text-primary rounded-circle me-1 fs-5'></i>&nbsp;tojorasii1619@gmail.com</p>
                </div>
                </article>
                <article>
                <strong class="fs-5 para-danger para-line">Lien actif</strong>
                    <NavLink style={{textDecoration:'none'}} to="/services"><p className='mt-3'>Services offerts</p></NavLink>
                    <NavLink style={{textDecoration:'none'}} to="/apropos"><p>Informations sur le site</p></NavLink>
                    <NavLink style={{textDecoration:'none'}} to="/contact"><p>Tous les coordonnees</p></NavLink>
                    </article>
                    <article>
                <strong class="fs-5 para-danger para-line">Portfolio</strong>
                    <NavLink style={{textDecoration:'none'}} to="/cv"><p className='mt-3'>Mon Curriculum vitae</p></NavLink>
                    <NavLink style={{textDecoration:'none'}} to="/profile"><p>Mon profile</p></NavLink>
                    <NavLink style={{textDecoration:'none'}} to="/exploits"><p>Mes exploits</p></NavLink>
                    </article>
                    <article className="d-flex gap-2" id='icon-mobile'>
                        <i className='bi bi-facebook fs-2 para-danger'></i>
                        <i className='bi bi-twitter fs-2 para-danger'></i>
                        <i className='bi bi-instagram fs-2 para-danger'></i>
                    </article>
            </section>
            <section className=' bg-body-tertiare text-center'>
                <p className='mt-3 fw-semibold'>&copy;Copyright_tojo_RASII_2023</p>
            </section>
        </footer>
      </main>
      </>
    )
  }
}

export default Footer
