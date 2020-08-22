import RM from './Rickandmorty'
import $ from 'jquery'

RM.then((personajes) => {
    const person  = document.getElementById('personajes')
    personajes.forEach(e => {
        person.innerHTML +=  `
    <div class="card mb-3 " style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img id="${e.id}" src="${e.imagen}" class="card-img imagen" alt="image">
      </div>
      <div class="col-md-8">
        <div class="card-body titulo_personaje ${e.id}">
          <h5 class="card-title"> El nombre de este personaje es : ${e.nombre}</h5>
          <p class="card-text">El género es : ${e.genero}</p>
          <p class="card-text"><small class="text-muted">Su especie es : ${e.especies}</small></p>
          <p class="card-text"><small class="text-muted"> Su estado es :${e.estado}</small></p>
        </div>
      </div>
    </div>
  </div>`
    });
    $('.imagen').click((e)=>{
       $(`.${e.target.id}`).css('display', 'block')
    });
    console.log(personajes)
}).catch((error) => console.log(error))


