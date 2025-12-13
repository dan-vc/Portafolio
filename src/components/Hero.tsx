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
            <strong>Desarrollador web</strong> con enfoque en backend usando <u>Laravel, PHP y MySQL</u>, experiencia en <u>WordPress</u>, desarrollo de temas personalizados y <u>Bricks Builder</u>. Con conocimientos en <u>HTML, CSS, Tailwind, Git</u> y bases en <u>React y Angular</u>
            <br />
            <br />
            Además, cuento con experiencia básica en <u>Three.js</u>, creando y animando modelos 3D para integrarlos en interfaces web interactivas. Apasionado por crear soluciones eficientes, bien estructuradas y por seguir aprendiendo nuevas tecnologías.
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
