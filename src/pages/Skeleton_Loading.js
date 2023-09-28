import React from 'react'

function Skeleton_Loading(){

    return (
      <div className='SK-load'>
          <div>
          <header className='SK-Nav fixed-top shadow-sm d-flex flex-row gap-3 p-2'>
            <div className='SK-Logo'>
            </div>
            <nav className='SK-Nav-section d-flex flex-row mt-3 mb-3'>
            </nav>
            <div className='SK-Btn1'></div>
            <div className='SK-Btn2'></div>
          </header>
          <main>
            <section>
               <article>
               </article>
               <article>
               </article>
               <article>
               </article>
               <article>
               </article>
               <article>
                <span></span>
                <span></span>
               </article>
            </section>
            <section>
              <article>

              </article>
            </section>
          </main>
      </div>
      </div>
    )
  }

export default Skeleton_Loading

