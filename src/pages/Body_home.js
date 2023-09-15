import React, { Component } from 'react'
import userImage from "../tools/image/tj.png"
import { NavLink } from "react-router-dom";

export class Body_home extends Component {
  render() {
    return (
      <div id='Body-homes' className='Body-homes shadow-sm'>
        <main className=' p-4 mt-5 m-lg-3 d-flex flex-row justify-content-between align-items-center'>
          <section class="rounded-1 p-4 section-home">
            <article>
              <p className='strong h4'>Bienvenue a vous, Je suis</p>
              <section className='min-vw-50'>
              <article className='d-flex flex-row gap-1'>
                <div className='name'><p className='h2 fw-bold'>Tojo_RASAMIMANANA</p></div>
              </article>
              </section>
              <p className='text-gris fw-semibold mt-1 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, porro.</p>
              <section className='d-flex flex-row gap-2'>
              <NavLink to="/profile"><button className='btn btn-danger fw-semibold rounded-1'>En savoir plus</button></NavLink>
              <NavLink to="/exploits"><button className='btn btn1 fw-semibold border-1 rounded-1'>Voir mes exploits</button></NavLink>
              </section>
            </article>
          </section>
          <section className='section-home2'>
            <article>
              <picture>
              <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462.14 449.8"><defs><style></style></defs><path class="cls-1" d="M525.82,487.79c-5.27-36.22-51.25-42.49-64.89-100.72-9.47-40.43,8.43-55.64-6.27-99.35-4.53-13.49-15.88-47.23-46.93-68.86C341.84,173,239,217.7,225.67,223.66c-62.68,28.18-92.8,74.65-112.12,104.47-25.49,39.35-57,88-47.72,147.45C78.66,557.9,164.75,630,257.56,645.13,399.61,668.29,535.52,554.41,525.82,487.79Z" transform="translate(-64.17 -198.39)"/></svg>
                <img src={userImage} alt="tojo" className='image-user'/>
              </picture>
            </article>
          </section>
        </main>
      </div>
    )
  }
}

export default Body_home
