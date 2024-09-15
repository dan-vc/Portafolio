
import Hero from './components/Hero'
import Proyects from './components/Proyects'
import WorkExperience from './components/WorkExperience'


function App() {


  return (
    <>

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
            © 2024<a href="https://github.com/dan-vc">Daner</a>. Esta web está inspirada en el porfolio de 
            <a href="https://midu.dev/">midudev</a>
          </p>
          <a href="mailto:danedo20472@gmail.com">Contacto</a>
        </div>
      </footer>
    </>
  )
}

export default App
