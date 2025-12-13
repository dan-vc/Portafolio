
import Hero from './components/Hero'
import Proyects from './components/Proyects'
import SkillsCarousel from './components/SkillsCarousel'
import WorkExperience from './components/WorkExperience'


function App() {


  return (
    <>
      <SkillsCarousel />

      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#experiencia-laboral">Experiencia</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="mailto:danedo20472@gmail.com">Contacto</a></li>
        </ul>
      </nav>

      <Hero />

      <WorkExperience />

      <Proyects />

      <footer>
        <div className="container">
          <p>
            © {new Date().getFullYear()}{" "}Desarrollado por<a href="https://github.com/dan-vc">Daniel Villafranqui.</a>
          </p>
          <a href="mailto:danedo20472@gmail.com">Contacto</a>
        </div>
      </footer>
    </>
  )
}

export default App
