import '../CSS/Projects.css'

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
            
            <div className='Proyect1'> 
                <div className="titulo-Proyect" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                
                <h1 style={{color:'white', textAlign:'center'}}>MVLS</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <hr className='Barra-Titulo' />
                </div>

            </div>

            <div className="info-project">
            
            <div className="img">
            <div className="IMG-Project"></div>
</div>

<div className="descrip-project">
    <p style={{color: 'white', textAlign:'center', marginTop:'8px'}} className='parrafo-project'>MVLS es una aplicacion que brinda soporte y mantenimiento en equipo de computo 
por medio de una videollamada y por un chat en vivo, se debe ingresar con el correo
 y contraseña que registraste en la pagina</p>
</div>

<div className="use-skills">
    <div className="skill">
        <p className='blur-sm'>electron</p>
    </div>

    <div className="skill">
        <p>HTML</p>
    </div>

    <div className="skill">
        <p>CSS</p>
    </div>

    <div className="skill">
        <p>JavaScript</p>
    </div>

    <div className="skill">
        <p>express.js</p>
    </div>

    <div className="skill">
        <p>agora</p>
    </div>

    <div className="skill">
        <p>webrtc</p>
    </div>

    <div className="skill">
        <p>mysql</p>
    </div>

</div>

            </div>

</div>

{/*🌟Proyect 2 */}

    <div className='Proyect1'> 
                <div className="titulo-Proyect" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <h1 style={{color:'white', textAlign:'center'}}>MVLS</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <hr className='Barra-Titulo' />
                </div>

            </div>
</div>

            </div>
        </div>
    )
}