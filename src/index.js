//  Bienvenidos al nuevo Hello World! programadores!
import rickMorty from './Rickandmorty'

rickMorty.then((personajes) => {
    const person  = document.getElementById('personajes')
    personajes.forEach(element => {
        
        person.innerHTML +=  `<img src="${element.imagen}" width="100">`
        
    });
    console.log(personajes)

}).catch((error) => console.log(error))
// (function daIgual (){
//    rickMorty;
// })()
