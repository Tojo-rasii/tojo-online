import React, { Component } from 'react'
import image from "../tools/image/tts.jpg"
import { NavLink } from "react-router-dom";

export class Body_Profile extends Component {
  render() {
    return (
      <div>
        <main className='Profile pb-3'>
          <header className='Profile-head d-flex flex-row-reverse rounded-1 p-4 ps-5 pt-4'>
            <section>
            <article>
              <picture className='Profile-img'>
                <img src={image} alt="tojo" className='outlin mt-2 image-home shadow-sm p-2' />
                <article className='mt-4'>
                <p className='fw-semibold bi-envelope fs-5 text-primary'>&nbsp;tojorasii1619@gmail.com</p>
                <p className='fw-semibold bi-telephone fs-5 text-gris mt-4'>&nbsp;0349865752, 0344856365</p></article>
                <NavLink to="/cv" style={{textDecoration:'none'}}>
              <article className='d-flex flex-row gap-2'>
                <i className='bi-link fs-2'></i><p className='fs-5 mt-2'>Curriculum vitae</p>
              </article></NavLink>
              </picture>
            </article>
            </section>
            <section className='Profile-content d-flex flex-column m-4'>
              <span className='d-flex flex-row'>
                <p className='fw-bold h2 text-primary'>Tojo RASAMIMANANA</p>
              </span>
              <p className='h4 fw-bold mt-1 text-second'>Web Designer UI/UX</p>
              <article className=' w-75 rounded-1 mt-4'>
                <p className='fw-semibold fs-5 text-primary'>Description<br /><p className='fs-6 fw-semibold  text-second w-100 p-2 rounded-1 mt-2'>je suis un web designer autodidacte passionné par la création de sites web modernes et esthétiquement plaisants.<br />Mon parcours en tant qu' autodidacte témoigne de ma détermination à constamment améliorer mes compétences et à rester à la pointe des dernières technologies et tendances</p></p>
                
                <p className='fw-semibold fs-5 mt-3 text-primary'>Passion</p>
                <article className='d-flex flex-column gap-3 p-1'>
                <span className='d-flex flex-row gap-3'><span className='outlines ps-3 p-1 rounded-4 pe-3'>Boxe</span><span className='outlines ps-3 p-1 rounded-4 pe-3'>MMA</span><span className='outlines ps-3 p-1 rounded-4 pe-3'>Muaythai</span></span>
                <span><span className='outlines ps-3 p-1 rounded-4 pe-3'>Cuisine saine</span></span>
                <span className='d-flex flex-row gap-3'><span className='outlines ps-3 p-1 rounded-4 pe-3'>Guitare</span><span className='outlines ps-3 p-1 rounded-4 pe-3'>Violant</span> </span>
                </article>
              </article>
              </section>
          </header>
          </main>
      </div>
    )
  }
}

export default Body_Profile
