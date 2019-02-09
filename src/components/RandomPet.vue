<template>
  <div>
    <h1>Random Pet View</h1>
  </div>
</template>

<script>
import PetFinderService from "@/services/PetFinderService.js";

export default {
  props: ["id"],
  data() {
    return {
      randompet: []
    };
  },
  created() {
    PetFinderService.getRandomPetID()
      .then(response => {
        this.randompet = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>

<style scoped>
a {
  color: red;
}
</style>
