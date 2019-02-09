<template>
  <div class="home">{{ pets }}</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//import SinglePet from "@/components/SinglePet.vue";
import PetFinderService from "@/services/PetFinderService.js";

export default {
  name: "home",
  data() {
    return {
      pets: {}
    };
  },
  created() {
    //api.petfinder.com/pet.getRandom?format=json&key=6005688e8e4a65da5a1492f9870a048a&id=39684306
    PetFinderService.getPets()
      .then(response => {
        this.pets = response;
        console.log(response);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>
