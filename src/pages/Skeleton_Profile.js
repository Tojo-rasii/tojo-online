import React from 'react'
import Navbar from './Navbar'

function Skeleton_Profile(){

    return (
      <div className='SK-load-Profile'>
          <div>
          <Navbar />
          <main>
            <section>
              <div></div>
              <span></span>
              <span></span>
              <span></span>
            </section>
            <section>
            <section>
            <article className='article'>
              <p></p>
              <p></p>
            </article>
            </section>
            <section>
            <article className='article'>
              <p></p>
              <p></p>
              <p></p>
            </article>
            </section>
            <section>
            <article className='article'>
              <p></p>
              <p></p>
            </article>
            </section>
            </section>
          </main>
      </div>
      </div>
    )
  }

export default Skeleton_Profile

