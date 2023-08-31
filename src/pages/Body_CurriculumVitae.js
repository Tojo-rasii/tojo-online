import React, { Component } from 'react'

export class Body_CurriculumVitae extends Component {
  render() {
    return (
      <div>
        <main className='Cv d-flex flex-row-reverse justify-content-between'>
            <section className='p-4'>
               <article>Curriculum Vitae</article>
               <article><i className='bi-download'></i>Telecharger en pdf</article>
               <picture>
               </picture>
            </section>
        </main>
      </div>
    )
  }
}

export default Body_CurriculumVitae
