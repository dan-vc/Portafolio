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
          time='Julio 2023 - Actualidad'
          description='Participo en el desarrollo de distintos proyectos web, principalmente usando el gestor de contenido de Wordpress en conjunto de plugins como motionPage y BricksForge para animaciones basadas en Gsap, Polylang para manejar diferentes idiomas y con el tema Bricks Builder.'
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
