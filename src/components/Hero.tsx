import { Frontendmentor } from "./icons/Frontendmentor";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import Tag from "./Tag";

export default function Hero() {

  return (
    <section id='hero'>
      <div className="container">
        <div className='description'>
          <h1>Hola, soy Daniel</h1>
          <p>
            <strong>Desarrollador web full-stack</strong> con experiencia en <u>Laravel, PHP y MySQL</u>, así como en la creación de interfaces modernas con <u>HTML, CSS, Tailwind, JavaScript</u> y herramientas visuales como <u>Bricks Builder</u>. He trabajado en proyectos reales que van desde el diseño y análisis, desarrollo frontend, lógica backend y despliegue.
            <br />
            <br />
            También cuento con conocimientos en React y Angular, y experiencia en animaciones 3D con <u>Three.js</u>. Me enfoco en crear soluciones limpias, eficientes y escalables, manteniendo una mentalidad constante de aprendizaje.
          </p>
        </div>
        <img src="/img/pf-picture.jpeg" alt="Avatar Image" className='avatar' />
      </div>
      <div className="container">
        <div className="tags">
          <Tag href="https://github.com/dan-vc" link external>
            <Github />
            Github
          </Tag>
          <Tag href="https://www.linkedin.com/in/daniel-villafranqui-233039203/" link external>
            <LinkedIn />
            LinkedIn
          </Tag>
          <Tag href="https://www.frontendmentor.io/profile/dan-vc" link external>
            <Frontendmentor />
            FrontEnd Mentor
          </Tag>
        </div>
      </div>
    </section>
  );
}
