console.log("El JS del modal si funciona");

const Modal = document.querySelector(".modal");
const btn_Cerrar = document.querySelector(".btn-cerrar");
const btn_izquierda = document.querySelector(".btn-izquierda");
const btn_derecha = document.querySelector(".btn-derecha");
const contenido_imgen = document.getElementById("visor-imagenes");


const Proyecto1 = document.querySelector(".one");
const Proyecto2 = document.querySelector(".two");
const Proyecto3 = document.querySelector(".three");
const Proyecto4 = document.querySelector(".four");

const ImagenesDataMVLS = [
    "/assets/img/inicioSesion_MVLS.png", 
    "/assets/img/MVLS-videollamada.png", 
    "/assets/img/MVLS-Videollamada2.png"
];

const Consultancy = [
    "/assets/img/CotizacionContable1.png", "/assets/img/CotizacionContable2.png", "/assets/img/CotizacionContable3.png", 
    "/assets/img/CotizacionContable4.png", "/assets/img/CotizacionesConsultancy.png", "/assets/img/InicioConsultancy.png",
    "/assets/img/InicioSesionConsultancy.png", "/assets/img/pdf_consultancy1.png", "/assets/img/pdf_consultancy3.png",
    "/assets/img/pdf_consultancy2.png", "/assets/img/pdf_consultancy4.png", "/assets/img/pdf_consultancy6.png",
    "/assets/img/paneladmin_Consultancy.png", "/assets/img/HistorialConsultancy.png"
];

const Lumisa = [
    "/assets/img/LumisaInicioSesion.png", "/assets/img/CotizacionesLumisa.png", "/assets/img/CotizacionLumisa.png",
    "/assets/img/CotizacionLumisa2.png","/assets/img/pdf_Lumisa.png", "/assets/img/pdfLumisa2.png", "/assets/img/HistorialLumisa.png",
    "/assets/img/panel_adminLumisa.png"
]

const AnalisisDashboard =[
    "/assets/img/Analisis1.png","/assets/img/Analisis2.png","/assets/img/Analisis3.png","/assets/img/Analisis4.png",
    "/assets/img/Analisis5.png","/assets/img/Analisis6.png","/assets/img/Analisis7.png"
]

let index = 0;
let ImagenesActuales = [];

function Recorrer_Imagenes(contenido){

    if(contenido){

    
    contenido.style.backgroundImage = `url(${ImagenesActuales[index]})`;
}
}

function Cierrer_AperturaModal (btn_proyecto, modal, btn_cerrar){

    if(btn_proyecto && modal  && btn_cerrar){

        btn_proyecto.addEventListener("click", (e) =>{
            modal.classList.add("active");
        });

        btn_cerrar.addEventListener("click", (e) =>{
            modal.classList.remove("active");
        })
    } else{
        console.log("Faltan elementos para el modal");
    }
}

function Abrir_Modal(btn_Derecho, btn_izquierdo){

    if(btn_Derecho){

        btn_Derecho.addEventListener("click", (e) =>{
            index ++;

            if (index >= ImagenesActuales.length){

                index = 0;
            }
            Recorrer_Imagenes(contenido_imgen);
        });
    }

    if(btn_izquierdo){
        btn_izquierdo.addEventListener("click", (e) =>{
            index --;

            if(index < 0){
                index = ImagenesActuales.length - 1;
            }

            Recorrer_Imagenes(contenido_imgen);
        });
    }
}

Abrir_Modal(btn_derecha, btn_izquierda);
Cierrer_AperturaModal(Proyecto1, Modal, btn_Cerrar);
Cierrer_AperturaModal(Proyecto2, Modal, btn_Cerrar);
Cierrer_AperturaModal(Proyecto3, Modal, btn_Cerrar );
Cierrer_AperturaModal(Proyecto4, Modal, btn_Cerrar);

if(Proyecto1){
    Proyecto1.addEventListener("click", (e) =>{
        index = 0;
        ImagenesActuales = ImagenesDataMVLS;
        Recorrer_Imagenes(contenido_imgen);
    });
}

if(Proyecto2){
    Proyecto2.addEventListener("click", (e) =>{
        index = 0;
        ImagenesActuales= Consultancy;
        Recorrer_Imagenes(contenido_imgen);
    });
}

if(Proyecto3){
    Proyecto3.addEventListener("click", (e) =>{
        index = 0;
        ImagenesActuales = Lumisa;
        Recorrer_Imagenes(contenido_imgen);
    });
}

if(Proyecto4){
    Proyecto4.addEventListener("click", (e) =>{
        index = 0;
        ImagenesActuales = AnalisisDashboard;
        Recorrer_Imagenes(contenido_imgen);
    });
}