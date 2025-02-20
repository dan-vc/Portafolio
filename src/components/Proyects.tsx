import CSS from "./icons/Css";
import HTML5 from "./icons/Html5";
import JavaScript from "./icons/JavaScript";
import Php from "./icons/Php";
import ProyectCard from "./ProyectCard";

export default function Proyects() {

  return (
    <section id='proyectos'>
      <div className="container">
        <h2>Proyectos</h2>

        <ProyectCard
          url='https://github.com/dan-vc/sistema_control_asistencia_mvc'
          img='sistema-control-asistencia.png'
          title='Sistema de Control de Asistencia - MVC'
          content='Participé en el desarrollo de un sistema de control de asistencia dirigido a instituciones educativas. Este proyecto fue desarrollado en PHP con el patrón de diseño MVC y usando una base de datos MySQL con una conexión mediante la interfaz PDO.'
          tags={[
            {
              component: <HTML5 />,
              name: 'HTML5'
            },
            {
              component: <CSS />,
              name: 'CSS'
            },
            {
              component: <Php />,
              name: 'PHP'
            },
            {
              component: <JavaScript />,
              name: 'JavaScript'
            }
          ]}
        />

        <ProyectCard
          url='https://www.frontendmentor.io/profile/dan-vc'
          img='frontend-mentor.jpg'
          title='Frontend Mentor Challenges'
          content='Soluciones a algunos desafios Frontend de la página Frontend mentor'
          tags={[
            {
              component: <HTML5 />,
              name: 'HTML5'
            },
            {
              component: <CSS />,
              name: 'CSS'
            }
          ]}
        />

        <ProyectCard
          url='https://dan-vc.github.io/Proyecto-GitHub-Replica/'
          img='github-replica.jpg'
          title='Replica de Github Home'
          content='Este proyecto web es una replica de la pagina inicial de Github usando HTML y CSS. Me ayudó a practicar posiciones absolutas y relativas, flex, grid y estilos CSS en general.'
          tags={[
            {
              component: <HTML5 />,
              name: 'HTML5'
            },
            {
              component: <CSS />,
              name: 'CSS'
            }
          ]}
        />

      </div>
    </section>
  )
}
