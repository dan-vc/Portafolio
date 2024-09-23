import CSS from "./icons/Css";
import HTML5 from "./icons/Html5";
import ProyectCard from "./ProyectCard";

export default function Proyects() {

  return (
    <section id='proyectos'>
      <div className="container">
        <h2>Proyectos</h2>

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
