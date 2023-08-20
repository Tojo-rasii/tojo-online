import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <>
      <main className='footer bottom-fixed bg-light w-100'>
        <footer className='d-flex flex-column'>
            <section className='d-flex flex-row m-lg-3 justify-content-between ps-4 pe-4 p-lg-3'>
                <article>
                <strong class="fs-5 text-danger">Contact</strong>
                        <p className='mt-2'>Location: Antananarive, MADAGASCAR</p>
                        <p>Telephone: +261349865752,+261344856365</p>
                        <p>Email: tojorasii1619@gmail.com</p>
                </article>
                <article>
                <strong class="fs-5 text-danger">Lien actif</strong>
                    <NavLink to="/cv"><p className='mt-2'>Services offerts</p></NavLink>
                    <p>Informations sur le site</p>
                    <p>Tous les coordonnees</p>
                    </article>
                    <article>
                <strong class="fs-5 text-danger">Portfolio</strong>
                    <NavLink to="/cv"><p className='mt-2'>Mon Curriculum vitae</p></NavLink>
                    <p>Mon profile</p>
                    <p>Mes exploits</p>
                    </article>
                    <article className="d-flex gap-1">
                        <i className='bi bi-facebook fs-3 text-danger'></i>
                        <i className='bi bi-twitter fs-3 text-danger'></i>
                        <i className='bi bi-instagram fs-3 text-danger'></i>
                    </article>
            </section>
            <section className=' bg-body-secondary text-center'>
                <p className='mt-3 fw-semibold'>&copy;Copyright_tojo_RASII_2023</p>
            </section>
        </footer>
      </main>
      </>
    )
  }
}

export default Footer
