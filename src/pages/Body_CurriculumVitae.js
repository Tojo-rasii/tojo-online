import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Body_CurriculumVitae extends Component {
  render() {
    const download =()=>{
      const url ='../tools/image/Globe.svg';
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'Globe.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    return (
      <div>
        <main className='Cv d-flex flex-row-reverse justify-content-between'>
            <section className='p-4 shadow-lg'>
               <article>
                <p className='fs-4 ms-3 fw-bold'>Curriculum Vitae</p>
                </article>
               <article className='d-flex flex-row p-1 rounded-1 shadow-sm outlines' onClick={download}>
                <i className='bi-download fs-3 mt-1 ms-3'>&nbsp;</i><p className='mt-3 ms-2'>Telecharger en pdf</p>
                </article>
               <picture>
               </picture>
            </section>
        </main>
      </div>
    )
  }
}

export default Body_CurriculumVitae
