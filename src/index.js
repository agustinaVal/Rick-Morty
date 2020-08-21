//  Bienvenidos al nuevo Hello World! programadores!
import rickMorty from './Rickandmorty'

rickMorty.then((personajes) => {
    const person  = document.getElementById('personajes')
    personajes.forEach(element => {
        
        person.innerHTML +=  `
        
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${element.imagen}" class="card-img" alt="image">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">${element.genero}</p>
          <p class="card-text"><small class="text-muted">${element.especies}</small></p>
          <p class="card-text"><small class="text-muted">${element.estado}</small></p>
        </div>
      </div>
    </div>
  </div>  `
        
    });
    console.log(personajes)

}).catch((error) => console.log(error))
// (function daIgual (){
//    rickMorty;
// })()
