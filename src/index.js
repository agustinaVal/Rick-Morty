//  Bienvenidos al nuevo Hello World! programadores!
import rickMorty from './Rickandmorty'

rickMorty.then((personajes) => {
    const person  = document.getElementById('personajes')
    personajes.forEach(element => {
        
        person.innerHTML +=  `<div class="personajes">
        <img src="${element.imagen}" width="100"> 
        <ul>
        <li>${element.nombre}</li>
        <li>${element.especies}</li>
        <li>${element.genero}</li>
        <li>${element.estado}</li> 
      </ul>
        </div>  `
        
    });
    console.log(personajes)

}).catch((error) => console.log(error))
// (function daIgual (){
//    rickMorty;
// })()
