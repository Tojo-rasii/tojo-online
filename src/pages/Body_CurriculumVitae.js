import React, { useState } from 'react'

function Body_CurriculumVitae(){
  const [active, setActive] = useState(false);

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
    const togg = () => {
      setActive(!active)
    }
    return (
      <div>
        <main className='Cv d-flex flex-row-reverse justify-content-between'>
            <section className='p-4 shadow-lg rounded-3'>
               <article>
                <p className='fs-4 fw-bold'>Curriculum Vitae</p>
                </article>
               <article>
                <button className='d-flex flex-row gap-2 rounded-5 shadow-lg text-white mt-2 ms-2 pt-2 pb-2 pe-4' onClick={togg}><i className='bi-download ms-3'></i>Telecharger <i className='bi-caret-down-fill'></i></button>
                <div className='rounded-2 mt-0' style={{ display: active ? "block" : "none" }}>
                <div className='d-flex flex-row gap-1' onClick={download}>
                <span>
                  <button className='bi-file-pdf-fill fs-3 p-2 ms-3 d-flex flex-row gap-2 rounded-circle shadow-sm mt-2 ms-1 pt-2 pb-2 ps-2 pe-2'></button></span>
                  <span><button className='rounded-5 shadow-sm mt-3 ms-1 pt-1 pb-1 pe-3 ps-3'>.PDF</button></span>
                </div>
                <div className='d-flex flex-row gap-1'>
                <span>
                  <button className='bi-file-image text-info fs-3 p-2 ms-3 d-flex flex-row gap-2 rounded-circle shadow-sm mt-2 ms-1 pt-2 pb-2 ps-2 pe-2'></button></span>
                  <span><button className='rounded-5 shadow-sm mt-3 ms-1 pt-1 pb-1 pe-3 ps-3 text-info'>.JPEG</button></span>
                </div>
                </div>
                </article>
               <picture>
               </picture>
            </section>
        </main>
      </div>
    )
  }


export default Body_CurriculumVitae
