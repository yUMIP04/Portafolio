console.log("El JS del modal si funciona");

const Proyecto1 = document.querySelector(".one");
const Proyecto2 = document.querySelector(".two");

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
Open_Modal(Proyecto2, Modal, btn_Cerrar );

/*Imagenes en modal */

const ImagenesDataMVLS = ["/assets/img/inicioSesion_MVLS.png", "/assets/img/MVLS-videollamada.png", "/assets/img/MVLS-Videollamada2.png"];
const ImagenesConsultancy = []
const btn_izquierda = document.querySelector(".btn-izquierda");
const btn_derecha = document.querySelector(".btn-derecha");
const contenido_imgen = document.querySelector(".contenido-modal");

let index = 0;

function Recorrer_Imagenes(imagenes, contenido){

    if(contenido){
        contenido.style.background = `url(${imagenes[index]})`;
    }

}

function Cambiar_imagen(button_derecho, button_izquierdo, imagenes){

    if(button_derecho){

        button_derecho.addEventListener("click", (e) => {
            index ++;

            if(index >= imagenes.length){
                index = 0;
            }

             Recorrer_Imagenes(ImagenesDataMVLS, contenido_imgen);
        })
    }

    if(button_izquierdo){

        button_izquierdo.addEventListener("click", (e) =>{
           index --;

           if(index < 0){

            index  = imagenes.length - 1;
           }

            Recorrer_Imagenes(ImagenesDataMVLS, contenido_imgen);
        })
    }
}

Cambiar_imagen(btn_derecha, btn_izquierda, ImagenesDataMVLS);

