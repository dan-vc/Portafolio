import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";

export default function Hero() {
  
  return (
    <section id='hero'>
      <div className="container">
        <div className='description'>
          <h1>Hola, soy Daniel</h1>
          <p>Estudiante de <strong>Informática y Desarrollo de Aplicaciones Web.</strong> Apasionado por la tecnología. Conocimientos en HTML, CSS, JS, PHP, MySQL, Github y frameworks como Angular y React.</p>
        </div>
        <img src="/img/pf-picture.jpeg" alt="Avatar Image" className='avatar' />
      </div>
      <div className="container">
        <div className="tags">
        <a className="tag-item" href="https://github.com/dan-vc" target="blank">
          <Github />
          Github
        </a>
        <a className="tag-item" href="https://www.linkedin.com/in/daniel-villafranqui-233039203/" target="blank">
          <LinkedIn />
          LinkedIn
        </a>
        </div>
      </div>
    </section>
  );
}
