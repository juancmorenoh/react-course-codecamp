import {createRoot} from 'react-dom/client'
import "./index.css"


function MainComponent(){
  return(
    <main>
      <img src="src/assets/react.svg" alt="react-logo" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>
          React is a JavaScript library for building user interfaces.
        </li>
        <li>
          React was created by Facebook in 2013 by Dan Abramov, Mark Zampolli, and Olivia Hirsch.
        </li>
        <li>
          React is used for building single-page applications (SPAs) and dynamic websites.
        </li>
      </ul>
    </main>
  )
}

function Header(){
  return (
    <header>
      <img src="src/assets/react.svg" alt="react-logo" />
      <nav>
        <ul className='nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Main(){
  return (
    <main>
        <h1>
          Fun facts about React
        </h1>
    </main>
  )
}
function Footer(){
  return(
    <footer>
        2024 delevoped by ME!
      </footer>
  )
}
function Page(){
  return(
    <>
      <Header />
      <Main />
      <Footer />
   </> 
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <> 
    <Page />
  </>
)


