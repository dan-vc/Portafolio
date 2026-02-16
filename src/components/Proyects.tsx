import Chartjs from "./icons/ChartJS";
import CSS from "./icons/Css";
import Donut from "./icons/Donut";
import Git from "./icons/Git";
import Github from "./icons/Github";
import Gsap from "./icons/Gsap";
import HTML5 from "./icons/Html5";
import JavaScript from "./icons/JavaScript";
import Laravel from "./icons/Laravel";
import Mysql from "./icons/Mysql";
import Php from "./icons/Php";
import { React } from "./icons/React";
import { Redux } from "./icons/Redux";
import Microsoftsqlserver from "./icons/SqlServer";
import { StyledComponents } from "./icons/StyledComponents";
import Tailwindcss from "./icons/Tailwind";
import Threejs from "./icons/ThreeJS";
import { TypeScript } from "./icons/TypeScript";
import ProyectCard from "./ProyectCard";
import Tag from "./Tag";

export default function Proyects() {

  return (
    <section id='proyectos'>
      <div className="container">
        <h2>Proyectos</h2>

        {/* Academy One */}
        <ProyectCard
          url="https://kds-dan-vc.netlify.app/"
          githubUrl='https://github.com/dan-vc/kitchen-display-system-idbi'
          img='/img/kds-thumb.png'
          title='KDS – Prueba Técnica / Proyecto Frontend'
          content='Este proyecto fue desarrollado como una prueba técnica para demostrar mis habilidades en desarrollo frontend. Se trata de una interfaz moderna y responsiva, implementada con React, Styled Components y Redux para el manejo de estado Global que simula un Kitchen Display System (KDS).'
        >
          <Tag>
            <React />
            React
          </Tag>
          <Tag>
            <StyledComponents />
            Styled Components
          </Tag>
          <Tag>
            <Redux />
            Redux
          </Tag>
          <Tag>
            <CSS />
            CSS
          </Tag>
          <Tag>
            <TypeScript />
            TypeScript
          </Tag>
        </ProyectCard>

        {/* Academy One */}
        <ProyectCard
          url="https://academy-one.free.nf"
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

        {/* Aplicación de gestión de tareas */}
        <ProyectCard
          url="https://app-gestion-tareas.free.nf/"
          githubUrl='https://github.com/dan-vc/academy-one-app'
          img='/img/taskflow-thumb.png'
          title='Aplicación de Gestión de Tareas - TaskFlow'
          content='Participé en el desarrollo de un sistema de gestión de tareas para estudiantes, profesionales y equipos. Diseñé y desarrollé una interfaz moderna basada en Laravel (Blade + Alpine.js), enfocada en la experiencia de usuario y una navegación intuitiva. Implementé un diseño completamente responsive para garantizar una visualización fluida tanto en móviles como en desktop.'
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
            <Tailwindcss />
            Tailwind CSS
          </Tag>
          <Tag>
            <Mysql />
            MySQL
          </Tag>
          <Tag>
            <Git />
            Git
          </Tag>
          <Tag>
            <Github />
            Github
          </Tag>
        </ProyectCard>

        {/* Code arquitect - Three.js */}
        <ProyectCard
          url='https://codearquitect-threejs.netlify.app/'
          img='/img/code-arquitect-thumb.png'
          title='Landing interactiva con Three.js'
          content='Landing page experimental desarrollada para demostrar el uso básico de Three.js, integrando modelos 3D y animaciones en el navegador. Las transiciones y animaciones están gestionadas con GSAP, aportando fluidez y control sobre la interacción visual dentro de una experiencia web simple y moderna.'
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

        {/* Sistema interno para pollería suarez */}
        <ProyectCard
          url='https://sistema-interno-polleria-suarez.netlify.app'
          githubUrl='https://github.com/dan-vc/sistema-interno-polleria-suarez'
          figmaUrl="https://www.figma.com/design/U0x2jc9Ana6pf8g5iZeZ7K/Sistema-de-gesti%C3%B3n---Poller%C3%ADa-Suarez?node-id=0-1&t=0hmTelfE1JbQ5hvU-1"
          img='/img/sistema-gestion-suarez-thumb.png'
          title='Sistema de Gestión de Pollería Suárez'
          content='Diseñé y desarrollé la interfaz completa de un Sistema de Gestión de Inventario, Pedidos y Contabilidad, utilizando HTML, CSS y JavaScript puro. El objetivo fue construir un frontend modular, responsive y funcional que sirviera como base para su futura integración con un backend real. Implementé dashboards, formularios dinámicos y gráficos interactivos, creando una experiencia clara y fluida para el usuario.'
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
            <JavaScript />
            JavaScript
          </Tag>
          <Tag>
            <Donut />
            SweetAlert2
          </Tag>
          <Tag>
            <Chartjs />
            Chart.js
          </Tag>
        </ProyectCard>

        {/* Sistema de control de asistencia */}
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
          <Tag>
            <Mysql />
            MySQL
          </Tag>
        </ProyectCard> */}

        {/* FrontendMentor projects */}
        {/* <ProyectCard
          githubUrl='https://www.frontendmentor.io/profile/dan-vc'
          img='/img/frontend-mentor.jpg'
          title='Frontend Mentor Challenges'
          content='Soluciones a algunos desafios Frontend de la página Frontend mentor'
        /> */}

      </div>
    </section>
  )
}
