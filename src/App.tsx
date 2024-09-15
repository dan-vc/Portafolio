import Hero from './components/Hero'
import CSS from './components/icons/Css'
import HTML5 from './components/icons/Html5'
import WorkExperience from './components/WorkExperience'


function App() {


  return (
    <>
      <Hero />

      <WorkExperience />

      <section id='proyectos'>
        <div className="container">
          <h2>Proyectos</h2>
          <div className="proyect-card">
            <img src="/img/default-img.jpg" alt="" />
            <div className="content">
              <h4>Titulo</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro autem ex necessitatibus placeat quas deleniti consequuntur repellat hic vel obcaecati vitae distinctio itaque molestiae laboriosam sunt ipsam, quisquam vero velit.</p>
              <div className="tags">
                <span className='tag-item'>
                  <HTML5 />
                  HTML5
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
