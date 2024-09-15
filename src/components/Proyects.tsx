import CSS from "./icons/Css";
import HTML5 from "./icons/Html5";

export default function Proyects() {

  return (
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
  )
}
