import React, { Component } from 'react'

export class Body_CurriculumVitae extends Component {
  render() {
    return (
      <div>
        <main className='Cv d-flex flex-row justify-content-between'>
            <section className='bg-light w-25 h-50 p-4'>
               <article>Curriculum Vitae</article>
               <article>Telecharger en pdf</article>
               <picture>
               </picture>
            </section>
            <section className='bg-light w-50 p-4 m-lg-4 rounded-1'>
                <header className='d-flex flex-row justify-content-between m-lg-3'>
                    <article>
                        <p>Tojo RASAMIMANANA</p>
                        <p>tojorasii1619@gmail.com</p>
                        <p>Tel: 0344856365</p>
                        <p>WEB DESIGNER</p>
                    </article>
                    <article className='mt-5'>
                        <picture className='bg-danger p-lg-5 rounded-circle'>
                            <img src="" alt="profile" />
                        </picture>
                    </article>
                </header>
                <main className='d-flex flex-row justify-content-between m-lg-3'>
                    <article>
                        <p className='text-uppercase'>EXPERIENCE</p>
                        <p></p>
                        <p></p>
                        <p className='text-uppercase'>Activite extra professionnelle</p>
                        <p></p>
                        <p className='text-uppercase'>Passion</p>
                        <p>Boxeur, MMA</p>
                        <p className='text-uppercase'>Contact</p>
                        <p>facebook</p>
                        <p>linkedin</p>
                        <p>github</p>
                    </article>
                    <article className='w-25 d-flex flex-wrap'>
                        <p>skills | design</p>
                        <picture>
                            <span>HTML</span>
                            <span>CSS</span><br />
                            <span>Js</span>
                            <span>Sass</span><br />
                            <span>Reactjs</span>
                            <span>tailwindCsss</span>
                        </picture>
                        <p>Graphic</p>
                        <picture>
                            <span>Ps</span>
                            <span>Ai</span>
                        </picture>
                    </article>
                </main>
            </section>
        </main>
      </div>
    )
  }
}

export default Body_CurriculumVitae
