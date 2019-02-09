<template>
  <div>
    <li v-for="(pet, index) in pets" :key="index">
      <PetProfile :pet="pet"/>
      <VoteButton type="like"/>
      <VoteButton type="dislike"/>
    </li>
  </div>
</template>

<script>
import PetFinderService from "@/services/PetFinderService.js";
import PetProfile from "@/components/PetProfile.vue";
import VoteButton from "@/components/VoteButton.vue";

export default {
  name: "PetProfileList",
  components: {
    PetProfile,
    VoteButton
  },
  data() {
    return {
      pets: {}
    };
  },
  created() {
    //api.petfinder.com/pet.getRandom?format=json&key=6005688e8e4a65da5a1492f9870a048a&id=39684306
    this.pets = PetFinderService.getPets();
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>