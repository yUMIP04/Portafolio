/*Seccion Sobre Mi */

import Foto_Character from '../assets/clawdeen wolf.jpeg'

export default function AboutMe_Seccion(){

    return (
        <div className="aboutME w-3/5 border-3 border-[#A855F799] rounded-2xl overflow-hidden" id="aboutME">

            <div className='Titulo-aboutMe'>
                <h1>Fullstack Dev</h1>
                <hr />
            </div>

            /*Foto y Informacion */
            <div className="info-AboutMe ">

                <div className='IMG-info'>
                <img className='w-1/2' src={Foto_Character} alt="" />

                <div className='info'>
                    <p> <strong>Nombre:</strong>Victoria Laney Perez Ramirez </p>
                    <p> <strong>Edad:</strong>21 Años </p>
                </div>

                </div>

                /*Informacion sobre mi estudio */
                <div className='Info-Dev'>
                    <p>Desarrolladora Fullstack orientada mas al area de <strong>Backend</strong>, me resulta muy interesante la manera en la que se construyen los sistemas,
                    las tecnologias, saber construir sistemas webs funcionales y escalables.
                    Me gusta llevar un orden en los proyectos, trabajar en equipo, conocer gente del sector y obtener mas conocimiento.
                    </p>
                </div>

            </div>

        </div>
    )
}