import '../CSS/Projects.css'
import { FaGithub } from "react-icons/fa6";
import Modal_Projects from './Modal';

export default function Projects(){


    return(

        <div className='Projects' id='proyectos' style={{marginTop:'40px'}}>

            <div className="titulo-Proyects" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <h1 style={{color:'white', textAlign:'center'}}>Proyectos</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <hr className='Barra-Titulo' />
                </div>
            </div>

            {/*🌟 Proyects*/}

            <div className="Proyects-show" style={{marginTop:'30px'}}>
            
            <div className='Proyect1 P1' id='P1'> 
                <div className="titulo-Proyect" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                
                <h1 style={{color:'white', textAlign:'center', fontSize:'1.5rem'}}>MVLS</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <hr className='Barra-Titulo' />
                </div>

            </div>

            <div className="info-project">
            
            <div className="img">
            <div className="IMG-Project"></div>
</div>

<div className="saber-mas-div">
    <p className='saber-mas' >Saber mas...</p>
</div>


<div className="link" style={{marginTop:'25px', color:'white', textAlign:'center', fontSize:'3rem'}}>
    <a href="https://github.com/yUMIP04/MVLS-APLICATTION" style={{color:'white'}}> <FaGithub className='link-repo' /></a>
</div>

            </div>

</div>

{/*🌟Proyect 2 */}

    <div className='Proyect1'> 
                <div className="titulo-Proyect" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                
                <h1 style={{color:'white', textAlign:'center', fontSize:'1.2rem'}}>Sistema de Cotizaciones - Consultancy</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <hr className='Barra-Titulo' />
                </div>

            </div>

            <div className="info-project">
            
            <div className="img">
            <div className="IMG-Project2"></div>
</div>
<div className="saber-mas-div" style={{marginBottom:'-15px'}}>
    <p className='saber-mas' >Saber mas...</p>
</div>

<div className="link" style={{marginTop:'25px', color:'white', textAlign:'center', fontSize:'3rem'}}>
    <a href="https://github.com/ganeth/Consultancy" style={{color:'white'}}> <FaGithub className='link-repo' /></a>
</div>

            </div>

</div>

{/*🌟Proyect 3 */}

    <div className='Proyect1'> 
                <div className="titulo-Proyect" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                
                <h1 style={{color:'white', textAlign:'center', fontSize:'1.2rem'}}>
Sistema de Cotizaciones - Lumisa
</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <hr className='Barra-Titulo' />
                </div>

            </div>

            <div className="info-project">
            
            <div className="img">
            <div className="IMG-Project3"></div>
</div>

<div className="saber-mas-div">
    <p className='saber-mas' >Saber mas...</p>
</div>

<div className="link" style={{marginTop:'25px', color:'white', textAlign:'center', fontSize:'3rem'}}>
    <a href="https://github.com/yUMIP04/Sistema-Cotizaciones-LUMISA" style={{color:'white'}}> <FaGithub className='link-repo' /></a>
</div>

            </div>

</div>


{/*🌟Proyect 4 */}
 <div className='Proyect1'> 
                <div className="titulo-Proyect" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                
                <h1 style={{color:'white', textAlign:'center', fontSize:'1.2rem'}}>
Sistema de Analisis de Dashboard
</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <hr className='Barra-Titulo' />
                </div>

            </div>

            <div className="info-project">
            
            <div className="img">
            <div className="IMG-Project4"></div>
</div>

<div className="saber-mas-div" >
    <p className='saber-mas' >Saber mas...</p>
</div>

<div className="link" style={{marginTop:'25px', color:'white', textAlign:'center', fontSize:'3rem'}}>
    <a href="https://github.com/yUMIP04/Sistema-de-Ventas-con-Dashboard" style={{color:'white'}}> <FaGithub className='link-repo' /></a>
</div>

            </div>

</div>


            </div>
        </div>
    )
}