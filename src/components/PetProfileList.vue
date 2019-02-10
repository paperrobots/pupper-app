<template>
  <div>
    <li v-for="(pet, index) in pets" :key="index">
      <PetProfile :pet="pet"/>
      <div class="voting">
        <VoteButton type="like" @click.native="like(pet.id)"/>
        <VoteButton @click.native="dislike(pet.id)" type="dislike"/>
      </div>
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
  },
  methods: {
    like(petID) {
      //TODO: pass that to the database and member profile
      console.log("Good Boy " + petID);
    },
    dislike(petID) {
      //TODO: add to data base with date that expires after so long so pet will go back into rotation
      console.log("Still a Good Boy just not my Good Boy " + petID);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>