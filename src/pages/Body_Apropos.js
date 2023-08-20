import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import image from "../tools/image/text1.jpg";
import react from "../tools/image/react.png"

export class Body_Apropos extends Component {
  render() {
    return (
      <div>
        <main className='Apropos'>
          <div className='header-apropos'>
            <header className='bg-light shadow-sm p-5 w-100'>
              <section className='d-flex flex-row gap-5'>
                <article className='w-50 mt-4 me-3'>
                  <p className='bi-info-circle fw-semibold text-body-secondary'>&nbsp;A propos</p>
                  <hr className='w-25 mt-0' />
                  <p className='h1 fw-bold'>L'elegance de mon portfolio</p>
                  <p className='text-body-secondary fw-semibold mt-3 ms-1 p-2'>là où la créativité rencontre la technologie. je suis un developpeur passionnée en conception web et en design graphique, dédiée à donner vie à vos visions numériques.</p>
                  <NavLink to="/profile"><button className='btn btn-success fw-semibold pb-2 pt-0 mt-2'><i className='bi-person-fill fs-4'>&nbsp;</i>Voir mon profile</button></NavLink>
                </article>
                <article className='d-flex justify-content-center align-items-center'>
                  <picture className='apropos-image bg-body-secondary shadow-sm p-2 rounded-1'>
                      <img src={image} alt="333" className='image2'/>
                  </picture>
                </article>
              </section>
            </header>
          </div>
          <div className='main-apropos bg-body-secondary mt-2 d-flex flex-row gap-4 p-3'>
            <section className='d-flex flex-column bg-light shadow-sm p-2 rounded-1'>
              <article className='bg-none p-2 rounded-5 w-25 text-center position-absolute  ms-4'><i className="bi bi-hand-thumbs-up text-primary fs-1"></i></article>
              <article className='d-flex flex-column align-items-center text-center'>
                <p className='text-uppercase fw-bold h3 text-primary mt-5 pt-4'>agilite</p>
                <p className='small w-75 p-1 fw-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, suscipit magnam? Est atque saepe ullam quis debitis veritatis perspiciatis expedita.</p>
              </article>
            </section>
            <section className='d-flex flex-column bg-light shadow-sm p-2 rounded-1'>
              <article className='bg-none p-2 rounded-5 w-25 text-center position-absolute ms-4'><i className="bi bi-lightning text-warning fs-1"></i></article>
              <article className='d-flex flex-column align-items-center text-center'>
                <p className='text-uppercase fw-bold h3 text-warning mt-5 pt-4'>rapidite</p>
                <p className='small w-75 p-1 fw-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque iure ipsam debitis eaque odio pariatur eligendi sapiente quas magni.</p>
              </article>
            </section>
            <section className='d-flex flex-column bg-light shadow-sm p-2 rounded-1'>
              <article className='bg-none p-2 rounded-5 w-25 text-center position-absolute'><i className="bi bi-emoji-sunglasses text-info fs-1"></i></article>
              <article className='d-flex flex-column align-items-center text-center'>
                <p className='text-uppercase fw-bold h3 text-info mt-5 pt-4'>professionnalisme</p>
                <p className='small w-75 p-1 fw-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint totam, soluta nam iusto tempora optio ipsa minus illo nostrum!</p>
              </article>
            </section>
          </div>
          <div className='footer-apropos bg-light mt-3 pb-5'>
            <section className='pt-3 ps-5'>
              <p className='text-primary fw-semibold fs-5 text-center p_right'>Technologies langage utilisee</p>
              <div className='d-flex flex-row justify-content-between w-75 gap-5 div-left mt-4'>
                <article className='d-flex flex-row gap-2 p-4 bg-light border-1 border w-75 justify-content-center'>
                  <picture>
                  <img src={react} alt="react" className='react-img'/>
                  </picture>
                  <p className='h5'>REACTJS</p>
                </article>
                <article className='d-flex flex-row gap-2 p-4 bg-light border-1 border w-75 justify-content-center'>
                  <picture>
                  <svg fill="#dc3545" opacity="1.0" width="55" height="55" viewBox="0 0 22 28"><path d="M17.656 9.328l.25-2.734H4.093l.734 8.344h9.562l-.344 3.563-3.078.828-3.063-.828-.203-2.188H4.967l.344 4.344 5.656 1.563h.063v-.016l5.609-1.547.781-8.5H7.357l-.234-2.828h10.531zM0 2h22l-2 22.469L10.969 27 2 24.469z" /></svg>
                  </picture>
                  <p className='h5'>HTML</p>
                </article>
                <article className='d-flex flex-row gap-2 p-4 bg-light border-1 border w-75 justify-content-center'>
                  <picture>
                    <i className='bi-javascript-fill fs-1'></i>
                  </picture>
                  <p className='h5'>JavaScript</p>
                </article>
                <article className='d-flex flex-row gap-2 p-4 bg-light border-1 border w-75 justify-content-center'>
                  <picture>
                    <svg fill="#757575" opacity="1.0" width="22" height="28" viewBox="0 0 22 28"><path d="M17.656 9.328l.25-2.734H4.093l.734 8.344h9.562l-.344 3.563-3.078.828-3.063-.828-.203-2.188H4.967l.344 4.344 5.656 1.563h.063v-.016l5.609-1.547.781-8.5H7.357l-.234-2.828h10.531zM0 2h22l-2 22.469L10.969 27 2 24.469z" /></svg>
                  </picture>
                  <p className='h5'>CSS</p>
                </article>
              </div>
            </section>
            <section className='section-top d-none'>
              <p className='text-body-secondary h4 fw-semibold text-center p_right'><span className='bg-dark rounded-1 text-light p-3'>La beaute du langage</span><span className='bg-danger rounded-1 text-light p-3 pe-5 ps-5'>l'Elegance du design <i className='bi-stars'></i> </span>
              </p>
            </section>
          </div>
        </main>
      </div>
    )
  }
}

export default Body_Apropos
