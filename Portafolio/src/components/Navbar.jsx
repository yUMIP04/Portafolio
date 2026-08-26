import '../CSS/Navbar.css'
import { useState } from 'react';

export default function Navbar(){

    const [seccion_activa, setActiva] = useState('Sobre-Mi')
    
    return(
        
       <header className="nav">
        <ul className="navigation">
            <li className={seccion_activa == 'Sobre-Mi' ? 'item active': 'item'} onClick={() => setActiva('Sobre-Mi') }  id="Sobre-Mi"><a href="#aboutME">Sobre Mi</a></li>
            <li className={seccion_activa == 'Proyectos' ? 'item active': 'item'}  onClick={() => setActiva('Proyectos') } id="Proyectos"><a href="#proyectos">Proyectos</a></li>
            <li className={seccion_activa == 'Contacto' ? 'item active': 'item'} onClick={() => setActiva('Contacto') } id="Contacto"><a href="#contacto">Contacto</a></li>
        </ul>
    </header>
    );
}