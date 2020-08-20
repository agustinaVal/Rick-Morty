import axios from "axios";

const rickMorty = async () => {
    try {
       const baseUrl = await axios.get("https://rickandmortyapi.com/api/character");
        
    } catch (error) {
        
    }
    
    

};




export default rickMorty