<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ pet }}
  </div>
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
      pet: {}
    };
  },
  created() {
    PetFinderService.getPet(42204862)
      .then(response => {
        this.pet = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>
