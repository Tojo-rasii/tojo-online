import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import image from "../tools/image/text2.jpg";
import react from "../tools/image/react.png"

export class Body_Apropos extends Component {
  render() {
    return (
      <div>
        <main className='Apropos'>
          <div className='header-apropos'>
            <header className='shadow-sm p-5'>
              <section className='d-flex flex-row gap-5'>
                <article className='w-50 mt-4 me-3'>
                  <p className='bi-info-circle fw-semibold text-body-secondary'>&nbsp;A propos</p>
                  <hr className='w-25 mt-0' />
                  <p className='h1 fw-bold text-success'>L'elegance de mon portfolio</p>
                  <p className='text-body-secondary fw-semibold mt-3 ms-1 p-2'>là où la créativité rencontre la technologie. je suis un developpeur passionnée en conception web et en design graphique, dédiée à donner vie à vos visions numériques.</p>
                  <NavLink to="/profile"><button className='btn btn-success fw-semibold pb-2 pt-0 mt-2'><i className='bi-person-fill fs-4'>&nbsp;</i>Voir mon profile</button></NavLink>
                </article>
                <article className='d-flex justify-content-center align-items-center'>
                  <picture className='apropos-image bg-none shadow-sm p-1 rounded-1'>
                      <img src={image} alt="333" className='image2'/>
                  </picture>
                </article>
              </section>
            </header>
          </div>
          <div className='main-apropos mt-2 d-flex flex-row gap-4 p-3'>
            <section className='d-flex flex-column shadow-sm p-2 rounded-1'>
              <article className='bg-none p-2 rounded-5 w-25 text-center position-absolute  ms-4'><i className="bi bi-hand-thumbs-up text-primary fs-1"></i></article>
              <article className='d-flex flex-column align-items-center text-center'>
                <p className='text-uppercase fw-bold h3 text-primary mt-5 pt-4'>agilite</p>
                <p className='small w-75 p-1 fw-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, suscipit magnam? Est atque saepe ullam quis debitis veritatis perspiciatis expedita.</p>
                
              </article>
            </section>
            <section className='d-flex flex-column shadow-sm p-2 rounded-1'>
              <article className='bg-none p-2 rounded-5 w-25 text-center position-absolute ms-4'><i className="bi bi-lightning text-warning fs-1"></i></article>
              <article className='d-flex flex-column align-items-center text-center'>
                <p className='text-uppercase fw-bold h3 text-warning mt-5 pt-4'>rapidite</p>
                <p className='small w-75 p-1 fw-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque iure ipsam debitis eaque odio pariatur eligendi sapiente quas magni.</p>
                
              </article>
            </section>
            <section className='d-flex flex-column shadow-sm p-2 rounded-1'>
              <article className='bg-none p-2 rounded-5 w-25 text-center position-absolute'><i className="bi bi-emoji-sunglasses text-info fs-1"></i></article>
              <article className='d-flex flex-column align-items-center text-center'>
                <p className='text-uppercase fw-bold h3 text-info mt-5 pt-4'>professionnalisme</p>
                <p className='small w-75 p-1 fw-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint totam, soluta nam iusto tempora optio ipsa minus illo nostrum!</p>
                
              </article>
            </section>
          </div>
          <div className='footer-apropos mt-3 pb-5'>
            <section className='pt-3 ps-5'>
              <p className='text-primary fw-semibold fs-5 text-center p_right'>Technologies langage utilisee</p>
              <div className='d-flex flex-row justify-content-between w-75 gap-5 div-left mt-4 me-3'>
                <article className='d-flex flex-row gap-2 p-3 langage-bg w-75 justify-content-start rounded-1'>
                  <picture>
                  <img src={react} alt="react" className='react-img'/>
                  </picture>
                  <p className='h5 mt-3 ms-3'>REACTJS</p>
                </article>
                <article className='d-flex flex-row gap-2 p-3 langage-bg w-75 justify-content-start rounded-1'>
                  <picture>
                  <svg fill="#ff0000" opacity="1.0" width="55" height="55" viewBox="0 0 22 28"><path d="M17.656 9.328l.25-2.734H4.093l.734 8.344h9.562l-.344 3.563-3.078.828-3.063-.828-.203-2.188H4.967l.344 4.344 5.656 1.563h.063v-.016l5.609-1.547.781-8.5H7.357l-.234-2.828h10.531zM0 2h22l-2 22.469L10.969 27 2 24.469z" /></svg>
                  </picture>
                  <p className='h5 mt-3 ms-3'>HTML</p>
                </article>
                <article className='d-flex flex-row gap-2 p-3 langage-bg w-75 justify-content-start rounded-1'>
                  <picture>
                  <svg fill="#ffc107" id="js" opacity="1.0" width="55" height="55" viewBox="0 0 16 16">
                <path
                    d="M0 0h16v16H0V0zm14.69 12.184c-.117-.73-.593-1.343-2.003-1.915-.49-.23-1.035-.39-1.198-.76-.06-.22-.07-.34-.03-.47.1-.43.61-.56 1.01-.44.26.08.5.28.65.6.69-.45.69-.45 1.17-.75-.18-.28-.27-.4-.39-.52-.42-.47-.98-.71-1.89-.69l-.47.06c-.45.11-.88.35-1.14.67-.76.86-.54 2.36.38 2.98.91.68 2.24.83 2.41 1.47.16.78-.58 1.03-1.31.94-.54-.12-.84-.39-1.17-.89l-1.22.7c.14.32.3.46.54.74 1.16 1.17 4.06 1.11 4.58-.67.02-.06.16-.47.05-1.1zM8.7 7.354H7.202c0 1.292-.006 2.576-.006 3.87 0 .822.042 1.576-.092 1.807-.22.46-.786.4-1.044.32-.264-.13-.398-.31-.553-.57-.042-.07-.074-.13-.085-.13l-1.217.75c.203.42.5.78.883 1.01.57.34 1.336.45 2.138.27.522-.15.972-.46 1.207-.94.34-.62.268-1.38.265-2.23.008-1.37 0-2.74 0-4.12z"
                    fill-rule="evenodd" />
            </svg>
                  </picture>
                  <p className='h5 mt-3 ms-4'>JavaScript</p>
                </article>
                <article className='d-flex flex-row gap-2 p-3 langage-bg w-75 justify-content-start rounded-1'>
                  <picture>
                  <svg fill="#0d6efd" id="css" opacity="1.0" width="55" height="55" viewBox="0 0 512 512">
                <path
                    d="M256.282 339.488zM64 32l34.946 403.219L255.767 480l157.259-44.85L448 32H64zm290.676 334.898l-98.607 28.125-98.458-28.248L150.864 289h48.253l3.433 39.562 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z" />
            </svg>
                  </picture>
                  <p className='h5 mt-3 ms-3'>CSS</p>
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
