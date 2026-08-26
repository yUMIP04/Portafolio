/* Seccion Sobre Mi */
import Foto_Character from '../assets/clawdeen wolf.jpeg';
import '../CSS/AboutMe.css'

{/*ICONOS */}
import { CiLinkedin } from "react-icons/ci";
import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function AboutMe_Seccion() {
  return (
    <div 
      className="aboutME  w-[65%] mx-auto mt-10 p-6 border border-[#A855F799] rounded-[15px] bg-white/5 backdrop-blur-md overflow-hidden" 
      id="aboutME"
    >
     
      <div className="Titulo-aboutMe mb-6 flex flex-col items-center">
        <h1 className="Titulo-seccAboutMe text-white text-2xl font-bold tracking-wide" style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: 'bold', display: 'block', textAlign:'center' }}>
            Fullstack Dev</h1>
        <hr className="barra-aboutMe border-t border-[#A855F799] mt-2 opacity-60" />
      </div>

      
      <div className="info-AboutMe flex flex-row md:flex-row gap-6 items-center text-white">
        
        <div className="IMG-info flex flex-col items-center md:w-1/3">
          <img 
            className=" IMG-Main w-full h-48 object-cover " 
            src={Foto_Character} 
            alt="Foto de perfil" style={{ borderRadius:'45%', marginTop:'25px'  }}
          />
          <div className="info mt-3  md:text-left space-y-1" style={{marginLeft:'16px', marginBottom:'18px'}}>
            <p className='' style={{color:'white'}}><strong>Nombre:</strong> Victoria Laney Perez Ramirez</p>
            <p style={{color:'white'}} ><strong>Edad:</strong> 21 Años</p>
          </div>
        </div>

        
      <div className="Info-Dev text-lg">
  <p className='text-lg' >
    Desarrolladora Fullstack orientada más al área de <strong style={{ color: '#C084FC' }}>Backend</strong>, 
    me resulta muy interesante la manera en la que se construyen los sistemas, las tecnologías, saber construir sistemas webs funcionales y escalables.
    Me gusta llevar un orden en los proyectos, trabajar en equipo, conocer gente del sector y obtener más conocimiento.
  </p>

  {/*REDES SOCIALES */}

  <div className='redes-sociales flex flex-row justify-center items-center' style={{gap:'20px', marginTop:'30px'}}>

    <div className='red-social' style={{color:'white', textAlign:'center'}}>
      <CiLinkedin />
      <p style={{textAlign:'center'}}> <a href="https://www.linkedin.com/in/victoria-laney-perez-ramirez-b5b37b389/">Linkedin</a></p>
    </div>

    <div className='red-social' style={{color:'white', textAlign:'center'}}>
      <SiIndeed />
      <p style={{textAlign:'center'}}> <a href="https://profile.indeed.com/?hl=es_MX&co=MX&from=gnav-homepage">Indeed</a> </p>
    </div>

    <div className='red-social' style={{color:'white', textAlign:'center'}}>
      <FaGithub />
      <p style={{textAlign:'center'}}><a href="https://github.com/yUMIP04" className='cursor-pointer '>GitHub</a></p>
    </div>

  </div>

</div>

      </div>
    </div>
  );
}