import React, { Component } from 'react'

export class Body_Loading extends Component {
  render() {
    return (
      <div>
          <div className='loading'>
        <main className='d-flex justify-content-center loading_main'>
            <section className='d-flex flex-column'>
                <article>
                    <picture>
                    <svg fill="#dc3545" className='svg-loading' opacity="1.0" width="130" height="130" viewBox="0 0 28 28"><path d="M8.219 21.781c0 1.094-.891 2-2 2-1.094 0-2-.906-2-2 0-1.109.906-2 2-2 1.109 0 2 .891 2 2zM16 25c0 1.109-.891 2-2 2s-2-.891-2-2 .891-2 2-2 2 .891 2 2zM5 14c0 1.109-.891 2-2 2s-2-.891-2-2 .891-2 2-2 2 .891 2 2zm18.781 7.781c0 1.094-.906 2-2 2-1.109 0-2-.906-2-2 0-1.109.891-2 2-2 1.094 0 2 .891 2 2zM8.719 6.219c0 1.375-1.125 2.5-2.5 2.5s-2.5-1.125-2.5-2.5 1.125-2.5 2.5-2.5 2.5 1.125 2.5 2.5zM27 14c0 1.109-.891 2-2 2s-2-.891-2-2 .891-2 2-2 2 .891 2 2zM17 3a3.001 3.001 0 0 1-6 0 3.001 3.001 0 0 1 6 0zm8.281 3.219c0 1.937-1.578 3.5-3.5 3.5a3.495 3.495 0 0 1-3.5-3.5c0-1.922 1.563-3.5 3.5-3.5 1.922 0 3.5 1.578 3.5 3.5z"/></svg>
                    </picture>
                </article>
                <article>
                    <p className='h2 mt-3'>Loading...</p>
                </article>
            </section>
        </main>
      </div>
      </div>
    )
  }
}

export default Body_Loading

