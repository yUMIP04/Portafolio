{/*SKILLS */}
import '../CSS/Skills.css'

import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";

export default function Skills_Secc(){

    return (

        <div className="Skills" style={{marginTop:'40px'}}>

            <div className="titulo-SKILLS" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <h1 style={{color:'white', textAlign:'center'}}>Skills</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <hr className='Barra-Titulo' />
                </div>
            </div>

<div className='All-Skills flex justify-center gap-[10px] items-center' >
            {/*🌟Habilidades Frontend */}

            <div className="Skills-frontend ">

                <div className='Titulo-Fronted' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <h1 style={{color:'white'}}>Frontend</h1>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <hr className='Barra-Front' style={{ height:'7px', width:'140px', borderRadius:'10px', borderColor:' rgba(168, 85, 247, 0.6)', backgroundColor:' rgba(168, 85, 247, 0.6)'}} />
                    </div>
                

                <div className='Skills-front'>

                    <div className='Skill-front' style={{color:'white'}}>
                        <div className="icono">
                        <RiTailwindCssFill />
                        </div>
                        <p>TailwindCSS</p>
                    </div>

                    <div className='Skill-front' style={{color:'white'}}>
                        <FaReact />
                        <p>React</p>
                    </div>

                    <div className='Skill-front' style={{color:'white'}}>
                        <FaBootstrap />
                        <p>Bootstrap</p>
                    </div>

                    
                    <div className='Skill-front' style={{color:'white'}}>
                        <FaCss3Alt />
                        <p>CSS</p>
                    </div>

                    <div className='Skill-front' style={{color:'white'}}>
                        <FaHtml5 />
                        <p>HTML</p>
                    </div>

                </div>

            </div>

            {/*🌟Habilidades Backend */}

            <div className='Skills-Backend'>

            </div>

            {/*🌟Otras Habilidades */}

            <div className='Others'>

            </div>

        </div>

        </div>
    )
}