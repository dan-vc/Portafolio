import './App.css'
import ExperienceCard from './components/ExperienceCard'
import CSS from './components/icons/Css'
import HTML5 from './components/icons/html5'



function App() {

  return (
    <>
      <section id='hero'>
        <div className="container">
          <div className='description'>
            <h1>Hola, soy Daniel</h1>
            <p>Estudiante de <strong>Informática y Desarrollo de Aplicaciones Web.</strong> Apasionado por la tecnología. Conocimiento en HTML, CSS y JS. Frameworks como Angular y React.</p>
          </div>
          <img src="/img/pf-picture.jpeg" alt="Avatar Image" className='avatar' />
        </div>
      </section>

      <section id='experiencia-laboral'>
        <div className="container">
          <h2>
            Experiencia laboral
          </h2>
          <ExperienceCard
            role='Desarrollador Web'
            enterprise='Tres media E.I.R.L'
            time='Julio 2023 - Actualidad'
            description='Participo en el desarrollo de distintos proyectos web, principalmente usando el gestor de contenido de Wordpress en conjunto de plugins como motionPage y BricksForge para animaciones basadas en Gsap, Polylang para manejar diferentes idiomas y con el tema Bricks Builder.'
          />
          <ExperienceCard
            role='Proximamente...'
            enterprise=''
            time=''
            description='...'
          />
        </div>
      </section>

      <section id='proyectos'>
        <div className="container">
          <h2>Proyectos</h2>
          <div className="proyect-card">
            <img src="/img/Placeholder-Image.jpg" alt="" />
            <div className="content">
              <h3>Titulo del proyecto</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusamus, et doloremque sequi fugiat illum unde delectus recusandae necessitatibus, sunt corporis commodi enim ipsam, quam est architecto numquam? Laborum, reprehenderit.</p>
              <div className="tags">
                <span className='tag-item'>
                  <HTML5 />
                  HTML
                </span>
                <span className='tag-item'>
                  <CSS />
                  CSS
                </span>
              </div>
            </div>
          </div>
          <div className="proyect-card">
            <img src="/img/Placeholder-Image.jpg" alt="" />
            <div className="content">
              <h3>Titulo del proyecto</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusamus, et doloremque sequi fugiat illum unde delectus recusandae necessitatibus, sunt corporis commodi enim ipsam, quam est architecto numquam? Laborum, reprehenderit.</p>
              <div className="tags">
                <span className='tag-item'>
                  <HTML5 />
                  HTML
                </span>
                <span className='tag-item'>
                  <CSS />
                  CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
