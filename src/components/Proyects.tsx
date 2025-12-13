import { Chartjs } from "./icons/ChartJS";
import { Gsap } from "./icons/Gsap";
import JavaScript from "./icons/JavaScript";
import { Laravel } from "./icons/Laravel";
import Php from "./icons/Php";
import { Microsoftsqlserver } from "./icons/SqlServer";
import { Tailwindcss } from "./icons/Tailwind";
import { Threejs } from "./icons/ThreeJS";
import ProyectCard from "./ProyectCard";
import Tag from "./Tag";

export default function Proyects() {

  return (
    <section id='proyectos'>
      <div className="container">
        <h2>Proyectos</h2>

        <ProyectCard
          githubUrl='https://github.com/dan-vc/academy-one-app'
          figmaUrl="https://www.figma.com/design/V1a5jORwonXtcJoT65GlNh/Academy-One-App?node-id=0-1&t=xUycFUOUxZsI5iZH-1"
          img='/img/academy-one-thumb.png'
          title='Academy One App'
          content='Desarrollé un sistema web de Gestión Académica con Laravel y SQL Server, que permite administrar alumnos, docentes, cursos y matrículas desde una plataforma centralizada. Implementé una API RESTful, arquitectura MVC, autenticación segura y una interfaz diseñada en Figma, enfocada en una experiencia UX/UI moderna y eficiente.'
        >
          <Tag>
            <Laravel />
            Laravel
          </Tag>
          <Tag>
            <Php />
            PHP
          </Tag>
          <Tag>
            <Microsoftsqlserver />
            SQL Server
          </Tag>
          <Tag>
            <Tailwindcss />
            Tailwind CSS
          </Tag>
          <Tag>
            <Chartjs />
            Chart.js
          </Tag>
        </ProyectCard>

        <ProyectCard
          img='/img/code-arquitect-thumb.png'
          title='Landing interactiva con Three.js'
          content='Landing page experimental desarrollada para demostrar el uso básico de Three.js, integrando modelos 3D y animaciones en el navegador. Las transiciones y animaciones están gestionadas con GSAP, aportando fluidez y control sobre la interacción visual dentro de una experiencia web simple y moderna.'
        >
          <Tag>
            <Threejs />
            Three.js
          </Tag>
          <Tag>
            <Gsap />
            GSAP
          </Tag>
          <Tag>
            <JavaScript />
            JavaScript
          </Tag>
        </ProyectCard>

        {/* <ProyectCard
          githubUrl='https://github.com/dan-vc/sistema_control_asistencia_mvc'
          img='/img/sistema-control-asistencia.png'
          title='Sistema de Control de Asistencia - MVC'
          content='Participé en el desarrollo de un sistema de control de asistencia dirigido a instituciones educativas. Este proyecto fue desarrollado en PHP con el patrón de diseño MVC y usando una base de datos MySQL con una conexión mediante la interfaz PDO.'
        >
          <Tag>
            <HTML5 />
            HTML5
          </Tag>
          <Tag>
            <CSS />
            CSS
          </Tag>
          <Tag>
            <Php />
            PHP
          </Tag>
          <Tag>
            <JavaScript />
            JavaScript
          </Tag>
        </ProyectCard> */}

        {/* <ProyectCard
          githubUrl='https://www.frontendmentor.io/profile/dan-vc'
          img='/img/frontend-mentor.jpg'
          title='Frontend Mentor Challenges'
          content='Soluciones a algunos desafios Frontend de la página Frontend mentor'
        /> */}

        {/* <ProyectCard
          githubUrl='https://dan-vc.github.io/Proyecto-GitHub-Replica/'
          img='/img/github-replica.jpg'
          title='Replica de Github Home'
          content='Este proyecto web es una replica de la pagina inicial de Github usando HTML y CSS. Me ayudó a practicar posiciones absolutas y relativas, flex, grid y estilos CSS en general.'
        /> */}

      </div>
    </section>
  )
}
