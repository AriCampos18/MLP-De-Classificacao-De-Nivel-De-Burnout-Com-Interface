import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Trabalho Bimestral MLP</h1>
          <h2>Previsão do Nível de Burnout em Meio Acadêmico</h2>
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h3>Preencha os campos abaixo para prever seu nível de burnout</h3>
          <p>
            Digite a sua idade
          </p>
           <p>
            Selecione seu gênero
          </p>
          <p>
            Selecione o tipo de curso que você está cursando
          </p>
          <p>
            Selecione qual ano do curso está atualmente
          </p>
          <p>
            Quantas horas por dia você passa estudando?
          </p>
          <p>
            Quantas horas você dorme diariamente?
          </p>
          <p>
            Quantas horas diárias passa nas redes sociais?
          </p>
          <p>
            O quanto você se considera uma pessoa estressada?
          </p>
          <p>
            O quanto você se considera uma pessoa ansiosa?
          </p>
          <p>
            O quanto você se considera uma pessoa depressiva?
          </p>
          <p>
            O quanto você se sente pressionado/a academicamente?
          </p>
          <p>
            O quanto voc~e se sente estressado com relação a finanças/dinheiro?
          </p>
          <p>
            Quanto você acha que pode contar com outras pessoas (família, amigos, rede de apoio, etc)?
          </p>
          <p>
            
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Prever
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
