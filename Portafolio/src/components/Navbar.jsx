import '../Navbar.css'


export default function Button(){

    return(
        
       <header className="nav">
        <ul className="navigation">
            <li className="item active" id="Sobre-Mi"><a href="#aboutME">Sobre Mi</a></li>
            <li className="item" id="Proyectos"><a href="#proyectos">Proyectos</a></li>
            <li className="item" id="Contacto"><a href="#contacto">Contacto</a></li>
        </ul>
    </header>
    );
}