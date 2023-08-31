import React, { Component } from 'react'
import userImage from "../tools/image/tojo1.png"
import { NavLink } from "react-router-dom";

export class Body_home extends Component {
  render() {
    return (
      <div id='Body-homes' className='shadow-sm'>
        <main className=' p-4 mt-5 m-lg-3 d-flex flex-row justify-content-between align-items-center'>
          <section class="rounded-1 p-4 section-home">
            <article>
              <p className='strong h4'>Bienvenue a vous, Je suis</p>
              <section className='min-vw-50'>
              <article className='d-flex flex-row gap-1'>
                <div className='name'><p className='h2 fw-bold'>Tojo_RASAMIMANANA</p></div>
              </article>
              </section>
              <p className='text-body-secondary fw-semibold mt-1 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, porro.</p>
              <section className='d-flex flex-row gap-2'>
              <NavLink to="/profile"><button className='btn btn-danger fw-semibold rounded-1'>En savoir plus</button></NavLink>
              <NavLink to="/exploits"><button className='btn bg-body-secondary fw-semibold border-1 shadow-sm rounde-1'>Voir mes exploits</button></NavLink>
              </section>
            </article>
            <div className='icons d-none position-absolute top-50'>
              <picture className='d-flex flex-row gap-3'>
                <article><i className='span fs-5 shadow-lg bi-behance'></i></article>

                <article><svg fill="#00000" opacity="1.0" width="20" height="20" viewBox="0 0 24 28"><path d="M5.453 9.766V25.25H.297V9.766h5.156zm.328-4.782c.016 1.484-1.109 2.672-2.906 2.672h-.031C1.11 7.656 0 6.468 0 4.984c0-1.516 1.156-2.672 2.906-2.672 1.766 0 2.859 1.156 2.875 2.672zM24 16.375v8.875h-5.141v-8.281c0-2.078-.75-3.5-2.609-3.5-1.422 0-2.266.953-2.641 1.875-.125.344-.172.797-.172 1.266v8.641H8.296c.063-14.031 0-15.484 0-15.484h5.141v2.25h-.031c.672-1.062 1.891-2.609 4.672-2.609 3.391 0 5.922 2.219 5.922 6.969z"/></svg></article>

                <article><i className='span2 fs-5 rounded-4 shadow-lg bi-github'></i></article>

              </picture>
            </div>
          </section>
          <section className='section-home2'>
            <article>
              <picture>
                <img src={userImage} alt="tojo" className='image-user'/></picture>
            </article>
          </section>
        </main>
      </div>
    )
  }
}

export default Body_home
