import CSS from "./icons/Css";
import HTML5 from "./icons/Html5";

export default function Proyects() {

  return (
    <section id='proyectos'>
      <div className="container">
        <h2>Proyectos</h2>

        <a className="proyect-card" href="https://www.frontendmentor.io/profile/dan-vc" target="blank">
          <img src="/img/frontend-mentor.jpg" alt="" />
          <div className="content">
            <h4>Frontend Mentor Challenges</h4>
            <p>Soluciones a algunos desafios Frontend de la página Frontend mentor</p>
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
        </a>

        <a className="proyect-card" href="https://dan-vc.github.io/Proyecto-GitHub-Replica/" target="blank">
          <img src="/img/github-replica.jpg" alt="" />
          <div className="content">
            <h4>Replica de Github Home</h4>
            <p>Este proyecto web es una replica de la pagina inicial de Github usando HTML y CSS. Me ayudó a practicar posiciones absolutas y relativas, flex, grid y estilos CSS en general.</p>
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
        </a>


      </div>
    </section>
  )
}
