/*
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista 
visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la 
lista y se mostrará en la página.
*/

let amigoSecreto = [];
const listaAmigo = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    
    listaAmigo.textContent = "";
    if(inputAmigo.value == ""){
        alert("Digite un Nombre Valido.");
    }else{
        amigoSecreto.push(inputAmigo.value);
        inputAmigo.value="";
        
    }
    mostrarLista(amigoSecreto);
}

function mostrarLista(datos) {
      datos.forEach(dato => {
        const elementoLista = document.createElement("li");
        elementoLista.textContent = dato;
        listaAmigo.appendChild(elementoLista);
      });
}

function sortearAmigo(){
    let limiteDeNombres = amigoSecreto.length;
    let sorteo = Math.floor(Math.random() * limiteDeNombres);
    listaAmigo.textContent = "";
    resultado.textContent = `La persona seleccionada es ${amigoSecreto[sorteo]}`;
}


