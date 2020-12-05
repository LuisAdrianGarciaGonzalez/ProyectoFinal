let postitAgregar;
let postitTexto;
let postitCategoria;

let postits = [];

window.addEventListener('load', inicializar, true);

function inicializar(){
    postitAgregar = document.getElementById("postit-agregar");
    postitTexto = document.getElementById("postit-texto");
    postitCategoria = document.getElementById("postit-categoria");
    contenedor = document.querySelector(".contenedor");
    error = document.querySelector(".error");
    
    postitAgregar.addEventListener('click', addPostit, true);
}

function addPostit(){
    if(postitTexto.value.length>3){
        nuevoPostit = {
            texto : postitTexto.value,
            categoria: postitCategoria.value,
        };
        postits.push(nuevoPostit);
    
        contenedor.innerHTML += "<div class='postit "+nuevoPostit.categoria+"'><div class='cerrar' id='"+ (postits.length-1) +"'>X</div>"+nuevoPostit.texto+"</div>";
        eliminar = document.querySelectorAll(".cerrar");
        for(let i=0; i<postits.length;i++){
            eliminar[i].addEventListener('click', removePostit, true);
        }
    }else{
        error.classList.remove('oculto');
        setTimeout(function(){
            error.classList.add('oculto');
        },3000);
    }
    
}

function removePostit(event){
    postits.splice(event.target.id, 1);
    document.getElementById(event.target.id).parentElement.remove()
}