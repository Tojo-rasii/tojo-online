import React, { Component } from 'react'

export class Body_Contact extends Component {
  render() {
    return (
      <div>
        <main className='Contact'>
            <div>
                <p className=''></p>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-between mt-5 ms-5 me-5'>
            <section className='d-flex flex-column align-items-center gap-2 p-3'>
                <article>
                    <picture>
                    <svg fill="#dc3545" opacity="1.0" width="74" height="74" viewBox="0 0 24 24"><path d="M18.984 15v-2.016h-1.969V15h1.969zm0 3.984v-1.969h-1.969v1.969h1.969zm-6-12V5.015h-1.969v1.969h1.969zm0 4.032V9h-1.969v2.016h1.969zm0 3.984v-2.016h-1.969V15h1.969zm0 3.984v-1.969h-1.969v1.969h1.969zm-6-7.968V9H5.015v2.016h1.969zm0 3.984v-2.016H5.015V15h1.969zm0 3.984v-1.969H5.015v1.969h1.969zM15 11.016h6V21H3V6.984h6V5.015l3-3 3 3v6z"/></svg>
                    </picture>
                </article>
                <article  className=''>
                    <p><span className='text-dark fw-semibold'>Location:</span> Antananarive, MADAGASCAR</p>
                    <p><span className='text-dark fw-semibold'>Tel:</span> 0344856365 - 0349865752</p>
                </article>
            </section>
            <section className='d-flex flex-column align-items-center gap-2'>
                <article>
                    <picture>
                        <i className='bi-globe2 globe-icon para-danger'></i>
                    </picture>
                </article>
                <article>
                    <p><span className='text-dark fw-semibold'>facebook:</span> Tojo RASAMIMANANA </p>
                    <p><span className='text-dark fw-semibold'>Whatsapp:</span> +261349865752</p>
                    <p><span className='text-dark fw-semibold'>Twitter:</span> Tojo "The emperor" RASII</p>
                </article>
            </section>
            <section  className='d-flex flex-column align-items-center gap-2'>
                <article>
                    <picture>
                    <svg fill="#dc3545" opacity="1.0" width="74" height="74" viewBox="0 0 24 28"><path d="M15.188 12.109c0-2.25-1.172-3.594-3.141-3.594-2.594 0-5.375 2.578-5.375 6.75 0 2.328 1.156 3.656 3.187 3.656 3.141 0 5.328-3.594 5.328-6.813zM24 14c0 4.859-3.469 6.687-6.438 6.781-.203 0-.281.016-.5.016-.969 0-1.734-.281-2.219-.828-.297-.344-.469-.781-.516-1.297-.969 1.219-2.656 2.406-4.766 2.406-3.359 0-5.281-2.078-5.281-5.703 0-4.984 3.453-9.031 7.672-9.031 1.828 0 3.297.781 4.078 2.109l.031-.297.172-.875c.016-.125.125-.281.234-.281h1.844c.078 0 .156.109.203.172.047.047.063.172.047.25l-1.875 9.594a3.458 3.458 0 0 0-.078.75c0 .844.25 1.016.891 1.016 1.062-.031 4.5-.469 4.5-4.781 0-6.078-3.922-10-10-10-5.516 0-10 4.484-10 10s4.484 10 10 10a10.04 10.04 0 0 0 6.328-2.25.483.483 0 0 1 .703.063l.641.766a.531.531 0 0 1 .109.375.547.547 0 0 1-.187.344 12.063 12.063 0 0 1-7.594 2.703c-6.609 0-12-5.391-12-12s5.391-12 12-12c7.172 0 12 4.828 12 12z"/></svg>
                    </picture>
                </article>
                <article>
                    <p><span className='text-dark fw-semibold'>Gmail:</span> tojorasii1619@gmail.com</p>
                    <p><span className='text-dark fw-semibold'>Github:</span> Tojo_Rasii</p>
                    <p><span className='text-dark fw-semibold'>LinkedIn:</span> Tojo_RASAMIMANANA</p>
                </article>
            </section>
            </div>
        </main>
      </div>
    )
  }
}

export default Body_Contact
