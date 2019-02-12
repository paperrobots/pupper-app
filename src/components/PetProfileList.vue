<template>
  <div>
    <li v-for="(pet, index) in pets" :key="index">
      <PetProfile :pet="pet"/>
      <div class="voting">
        <VoteButton @click.native="vote(true, pet.id)" type="like"/>
        <VoteButton @click.native="vote(false, pet.id)" type="dislike"/>
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
    vote(liked, petID) {
      //TODO: Add to database; if liked is not truthy add an expiration date to put the pet back in rotation
      //TODO: Remove element from Dom
      var LikedText = liked === true ? "Liked" : "Disliked";
      console.log(LikedText + " Pet #" + petID);
    }
  }
};
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>