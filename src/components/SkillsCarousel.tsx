import "../styles/skills-carousel.css";

// Importa tus íconos
import Laravel from "./icons/Laravel";
import JavaScript from "./icons/JavaScript";
import Php from "./icons/Php";
import Tailwindcss from "./icons/Tailwind";
import Threejs from "./icons/ThreeJS";
import Github from "./icons/Github";
import Microsoftsqlserver from "./icons/SqlServer";
import Chartjs from "./icons/ChartJS";
import CSS from "./icons/Css";
import Figma from "./icons/Figma";
import Gsap from "./icons/Gsap";
import HTML5 from "./icons/Html5";
import MysqlWordmark from "./icons/MysqlWordmark";

const skills = [
    Chartjs,
    CSS,
    Figma,
    Gsap,
    HTML5,
    JavaScript,
    Laravel,
    Php,
    Microsoftsqlserver,
    MysqlWordmark,
    Tailwindcss,
    Threejs,
    Github,
];

export default function SkillsCarousel() {
    return (
        <>
            {/* Carrusel izquierdo */}
            <div className="skills-carousel left">
                <div className="skills-track up">
                    {[...skills, ...skills].map((Icon, index) => (
                        <Icon key={index} className="skill-icon" />
                    ))}
                </div>
            </div>

            {/* Carrusel derecho */}
            <div className="skills-carousel right">
                <div className="skills-track down">
                    {[...skills, ...skills].map((Icon, index) => (
                        <Icon key={index} className="skill-icon" />
                    ))}
                </div>
            </div>
        </>
    );
}
