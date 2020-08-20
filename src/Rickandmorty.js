import axios from "axios";

class Personajes{
constructor(nombre,id,genero,edad,especies,estado,imagen){

    this.nombre = nombre
    this.id = id
    this.genero = genero
    this.edad = edad
    this.especies = especies
    this.estado = estado

}



}



let personaje = new Personajes()


const rickMorty = async () => {
    try {
       const baseUrl = await axios.get("https://rickandmortyapi.com/api/character");
        let datos = baseUrl.data.results
let personajes= []
        datos.forEach(e => {
            
        personajes.push(new Personajes(e.name,e.id,e.gender,e.age,e.species,e.status,e.image))


        });
        console.log(personajes)


    } catch (error) {
        
    }
    
    

};




export default 