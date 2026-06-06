
/*CAMBIAR ITEM EN EL NAV */
const SobreMi = document.getElementById("Sobre-Mi");
const Proyectos = document.getElementById("Proyectos");
const Contacto = document.getElementById("Contacto");

function Activo_Inactivo(item_Activo, item_inactivo1, item_inactivo2){

    item_Activo.classList.add('active');
    item_inactivo1.classList.remove('active');
    item_inactivo2.classList.remove('active');

}


function Cambiando_item(){
    
    SobreMi.addEventListener("click", () =>{

    Activo_Inactivo(SobreMi, Proyectos, Contacto);
})

Proyectos.addEventListener("click", () =>{

    Activo_Inactivo(Proyectos, SobreMi, Contacto);
})

Contacto.addEventListener("click", () =>{

    Activo_Inactivo(Contacto, SobreMi, Proyectos);
})
} 

Cambiando_item()
console.log("Si funciono");