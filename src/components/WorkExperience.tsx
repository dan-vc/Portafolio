import ExperienceCard from "./ExperienceCard";

export default function WorkExperience() {

  return (
    <section id='experiencia-laboral'>
      <div className="container">
        <h2>
          Experiencia laboral
        </h2>
        <ExperienceCard
          role='Desarrollador Web'
          enterprise='Tres media E.I.R.L'
          time='Julio 2024 - Actualidad'
          description='Participé en el desarrollo de landing pages, catálogos administrables y e-commerce usando WordPress, WooCommerce y ACF. Implementé animaciones avanzadas con GSAP mediante MotionPage y BricksForge, mejorando la experiencia visual. Construí sitios modulares y escalables con Bricks Builder, optimizando tiempos de entrega. Colaboré con diseñadores y desarrolladores para traducir prototipos de Figma en interfaces funcionales. Además, aporté mejoras técnicas internas y desarrollé módulos en PHP para sistemas de gestión más complejos.'
        />
        <ExperienceCard
          role='Proximamente...'
          enterprise=''
          time=''
          description='...'
        />
      </div>
    </section>
  );
}
