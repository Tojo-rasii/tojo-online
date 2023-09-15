import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class Skills extends Component {
  render() {
    return (
      <div className='skills'>
        <main className='skills-main' id="skills-main">
            <section className='skills-section' id='skills-section1'>
                <artice className="p-lg-4 shadow-lg rounded-4 skills-skills">
                    <legend className='skills-circle p-lg-5 shadow-sm'>
                        <p className='fw-bold text-info'>75%</p>
                    </legend>
                    <p className='fw-semibold text-center fs-5'>ReactJS</p>
                </artice>
                <artice className="p-lg-4 shadow-lg rounded-4 skills-skills">
                    <legend className='skills-circle1 p-lg-5 shadow-sm'>
                        <p className='fw-bold para-danger'>89%</p>
                    </legend>
                    <p className='fw-semibold text-center fs-5'>HTML</p>
                </artice>
                <artice className="p-lg-4 shadow-lg rounded-4 skills-skills">
                    <legend className='skills-circle2 p-lg-5 shadow-sm'>
                        <p className='fw-bold text-primary'>95%</p>
                    </legend>
                    <p className='fw-semibold text-center fs-5'>CSS</p>
                </artice>
                <artice className="p-lg-4 shadow-lg rounded-4 skills-skills">
                    <legend className='skills-circle3 p-lg-5 shadow-sm'>
                        <p className='fw-bold text-warning'>80%</p>
                    </legend>
                    <p className='fw-semibold text-center fs-5'>Javascript</p>
                </artice>
            </section>
            <section className='skills-section m-lg-5'  id='skills-section1'>
                 <article className='skills-article'>
                    <p className='mt-5'>Mes competences</p>
                    <hr className='w-25' />
                    <p className='h3 fw-bold'>La beaute du langage <br /><span className='h1 fw-bold mt-1'>l'Elegance du design</span></p>
                    <p className='text-gris fw-semibold mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus consequatur dolores eligendi cumque. Dolore harum nihil consectetur minima eius.</p>
                    <NavLink to="/cv"><button className='btn btn-danger p-lg-2 rounded-1 shadow-sm mt-4'>Tableau de bord CV</button></NavLink>
                 </article>
            </section>
        </main>
      </div>
    )
  }
}

export default Skills
