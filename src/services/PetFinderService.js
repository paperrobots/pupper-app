import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
  withCredentials: false // This is the default
});

export default {
  // Get a list of all pets
  getPets() {
    return apiClient.get('pokemon/?limit=1000'); // "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
  },
  getSomePets() {},
  // Get specific pet based on ID
  // 42204862
  getPet(id) {
    return apiClient.get('pokemon/' + id);
  }
};
