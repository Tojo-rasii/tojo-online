import React, { Component } from 'react'

export class Body_Contact extends Component {
    render() {
        return (
            <div>
                <main className='Contact d-flex flex-column'>
                    <div className='text-center mt-3'>
                        <p className='h2 fw-bold text-primary'>Besoin d'un design elegant</p>
                        <p>N'hesitez pas a me contacter via mes coordonnees</p>
                    </div>
                    <div className='d-flex flex-row flex-wrap justify-content-between mt-4 ms-5 me-5'>
                        <section className='d-flex flex-column gap-1 p-3'>
                            <article>
                                <picture>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#ff1717" className="bi bi-people ms-2 svg shadow-sm rounded-1"  viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                    </svg>
                                    <p className='h4 fw-bold p-2 mt-1'>Personnel</p>
                                </picture>
                            </article>
                            <article className='p-1'>
                                <p><span className='text-primary fw-semibold  bi-geo-alt fs-5 me-2'></span>Antananarive, MADAGASCAR</p>
                                <p><span className='text-primary fw-semibold bi-telephone fs-5 me-2'></span>0344856365 - 0349865752</p>
                            </article>
                        </section>
                        <section className='d-flex flex-column gap-1 p-3'>
                            <article>
                                <picture>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#ff1717" className="bi bi-globe2 ms-1 svg shadow-sm rounded-1" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                    </svg>
                                    <p className='h4 fw-bold p-2 mt-2'>Reseaux sociaux</p>
                                </picture>
                            </article>
                            <article className='p-1'>
                                <p><span className='fw-semibold bi-facebook p-1 rounded-1 text-primary fs-4 me-2'></span> Tojo RASAMIMANANA </p>
                                <p><span className='fw-semibold bi-whatsapp p-1 rounded-1 text-primary fs-4 me-2'></span> +261349865752</p>
                                <p><span className='fw-semibold bi-twitter text-primary p-1 fs-4 me-2'></span> Tojo "The emperor" RASII</p>
                            </article>
                        </section>
                        <section className='d-flex flex-column gap-1 p-3'>
                            <article>
                                <picture>
                                    <svg fill="#ff1717" className="ms-1 svg shadow-sm rounded-1" opacity="1.0" width="60" height="60" viewBox="0 0 24 28"><path d="M15.188 12.109c0-2.25-1.172-3.594-3.141-3.594-2.594 0-5.375 2.578-5.375 6.75 0 2.328 1.156 3.656 3.187 3.656 3.141 0 5.328-3.594 5.328-6.813zM24 14c0 4.859-3.469 6.687-6.438 6.781-.203 0-.281.016-.5.016-.969 0-1.734-.281-2.219-.828-.297-.344-.469-.781-.516-1.297-.969 1.219-2.656 2.406-4.766 2.406-3.359 0-5.281-2.078-5.281-5.703 0-4.984 3.453-9.031 7.672-9.031 1.828 0 3.297.781 4.078 2.109l.031-.297.172-.875c.016-.125.125-.281.234-.281h1.844c.078 0 .156.109.203.172.047.047.063.172.047.25l-1.875 9.594a3.458 3.458 0 0 0-.078.75c0 .844.25 1.016.891 1.016 1.062-.031 4.5-.469 4.5-4.781 0-6.078-3.922-10-10-10-5.516 0-10 4.484-10 10s4.484 10 10 10a10.04 10.04 0 0 0 6.328-2.25.483.483 0 0 1 .703.063l.641.766a.531.531 0 0 1 .109.375.547.547 0 0 1-.187.344 12.063 12.063 0 0 1-7.594 2.703c-6.609 0-12-5.391-12-12s5.391-12 12-12c7.172 0 12 4.828 12 12z" /></svg>
                                    <p className='h4 fw-bold p-2 mt-1'>Professionnel</p>
                                </picture>
                            </article>
                            <article className='p-1'>
                                <p><span className='text-primary fw-semibold bi-envelope fs-5 me-2'></span> tojorasii1619@gmail.com</p>
                                <p><span className='text-primary fw-semibold bi-github fs-5 me-2'></span> Tojo_Rasii</p>
                                <p><span className='text-primary fw-semibold bi-linkedin fs-5 me-2'></span> Tojo_RASAMIMANANA</p>
                            </article>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}

export default Body_Contact
