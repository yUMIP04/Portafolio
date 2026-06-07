console.log("El JS del modal si funciona");

const Proyecto1 = document.querySelector(".one");
const Modal = document.querySelector(".modal");
const btn_Cerrar = document.querySelector(".btn-cerrar");

function Open_Modal(btn_proyect, modal, btn_cerrar){

    if(btn_proyect && modal && btn_cerrar){

    
    btn_proyect.addEventListener("click", (e) =>{

        modal.classList.add("active");

        btn_cerrar.addEventListener("click", (e) =>{
            
            modal.classList.remove("active");
    })

    })

    } else{
        console.log("Hubo un error");
    }
}

Open_Modal(Proyecto1, Modal, btn_Cerrar);


/*Imagenes en modal */

const ImagenesData = ["/assets/img/inicioSesion_MVLS.png", "/assets/img/MVLS-videollamada.png"];