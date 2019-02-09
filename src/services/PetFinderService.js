import axios from 'axios';

const apiClient = axios.create({
  baseURL: `http://api.petfinder.com`,
  withCredentials: false, // This is the default
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

export default {
  // Get a list of all or alot of pets
  getPets() {
    return apiClient.get('/pets');
  },
  // Get a random pet ID
  // /pet.getRandom?format=json&key=6005688e8e4a65da5a1492f9870a048a&id=39684306
  getRandomPetID() {
    apiClient.get(
      '/pet.getRandom?format=json&key=6005688e8e4a65da5a1492f9870a048a&id=39684306'
    );
  },
  // Get specific pet based on ID
  // 42204862
  getPet(id) {
    return apiClient.get(
      '/pet.get?id=' + id + '&key=6005688e8e4a65da5a1492f9870a048a'
    );
  }
};
