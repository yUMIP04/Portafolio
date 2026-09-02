import '../CSS/Modal.css';


export default function Modal_Projects({is_open, is_close}){

    if(!is_open) return null;
   
    return (
        <div className="modal">
            
            <div className="modal-container">

                <div className="imagen">
                    <img src="" alt="No hay Imagen por el momento" />
                </div>

                <div className="info-project">

                    <p>dskjdskjdsdjkddjksdkjdsjkd</p>

                    <div className="skills">
                        <p>Ninguna por el momento</p>
                    </div>

                    <div className="btn">
                        <button type='button'>Cerrar</button>
                    </div>

                </div>
                
            </div>
        
        </div>
    )
}