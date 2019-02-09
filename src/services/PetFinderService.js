import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
  withCredentials: false // This is the default
});

export default {
  // Get a list of all pets
  getPets() {
    var pets = [];
     apiClient.get('pokemon/').then(response => {
      // handle success
      //console.log(response);
      response.data.results.forEach(pet => {
        apiClient.get(pet.url).then(response => {
          //console.log(response.data);
          pets.push(response.data);
        });
      });
    }); // "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
    return pets;
  },
  getSomePets() {},
  // Get specific pet based on ID
  // 42204862
  getPet(id) {
    return apiClient.get('pokemon/' + id);
  }
};
