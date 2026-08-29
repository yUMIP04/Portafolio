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
</div>

            </div>
        </div>
    )
}