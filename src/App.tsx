
import Hero from './components/Hero'
import Proyects from './components/Proyects'
import WorkExperience from './components/WorkExperience'


function App() {


  return (
    <>
      <Hero />

      <WorkExperience />

      <Proyects />

      <footer>
        <div className="container">
          <p>
            © 2024 Daner. Esta web está inspirada en el porfolio de 
            <a href="https://midu.dev/">midudev</a>
          </p>
          <a href="">Contacto</a>
        </div>
      </footer>
    </>
  )
}

export default App
