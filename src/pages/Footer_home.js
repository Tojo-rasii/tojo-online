import React, { Component } from 'react'

export class Footer_home extends Component {
  render() {
    return (
      <div>
        <main className="Footer-contact bg-light shadow-sm rounded-1 p-4 mb-3">
         <h2>Contact</h2>
         <section className='d-flex flex-row-reverse justify-content-between'>
            <article>
            <footer className='d-flex justify-content-center mb-5'>
            <section className='mt-3 ms-5 d-flex flex-column'>
                <article className='text-center'>
                    <picture className='d-flex flex-row gap-2'>
                        <i className='bi-star-fill fs-5 text-warning'></i>
                        <i className='bi-star-fill fs-5 text-warning'></i>
                        <i className='bi-star-fill fs-5 text-warning'></i>
                    </picture>
                    <p className='text-body-secondary fw-semibold mt-2 w-75'>N'oubliez pas de me laisser quelques message en donnant votre avis</p>
                </article>
                <article className='Formulaire'>
                    <form action="">
                        <label htmlFor="">Nom</label><br />
                        <input type="Nom" className='p-3 rounded-1 w-75 mt-1 bg-light shadow-sm'/><br />
                        <label htmlFor="" className='mt-2'>Prenom</label><br />
                        <input type="Prenom"  className='p-3 rounded-1 w-75 mt-1 bg-light shadow-sm'/><br />
                        <label htmlFor="" className='mt-2'>Email</label><br />
                        <input type="Email"  className='p-3 rounded-1 w-75 mt-1 bg-light shadow-sm'/><br />
                        <label htmlFor="" className='mt-2'>Message</label><br />
                        <textarea  className='p-3 rounded-1 w-75 mt-1 bg-light shadow-sm'></textarea><br />
                        <input type="submit" value="Envoyer" className='btn btn-primary mt-2 p-3 w-50 rounded-1 fw-semibold
                        '/>
                    </form>
                </article>
            </section>
        </footer>
            </article>
            <article>
                <ul className='d-flex flex-column gap-4 m-lg-5'>
                    <li><i className='bi-github fs-2'></i>&nbsp; Tojo_Rasii</li>
                    <li><i className='bi-linkedin fs-2 text-primary-emphasis'></i>&nbsp; Tojo RASAMIMANANA</li>
                    <li><i className='bi-twitter fs-2 text-info'></i>&nbsp; Tojo "The emperor" Rasii</li>
                    <li><i className='bi-facebook fs-2 text-primary'></i>&nbsp; Tojo RASAMIMANANA</li>
                </ul>
            </article>
         </section>
         </main>
      </div>
    )
  }
}

export default Footer_home
