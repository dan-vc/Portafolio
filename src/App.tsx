
import Hero from './components/Hero'
import Proyects from './components/Proyects'
import WorkExperience from './components/WorkExperience'


function App() {


  return (
    <>

    <nav>
      <ul>
        <li><a href="#experiencia-laboral">Experiencia</a></li>
        <li><a href="#proyectos">Trabajos</a></li>
      </ul>
    </nav>

      <Hero />

      <WorkExperience />

      <Proyects />

      <footer>
        <div className="container">
          <p>
            © 2024<a href="https://github.com/dan-vc">Daner</a>. Esta web está inspirada en el porfolio de 
            <a href="https://midu.dev/">midudev</a>
          </p>
          <a href="">Contacto</a>
        </div>
      </footer>
    </>
  )
}

export default App
