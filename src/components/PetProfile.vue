<template>
  <div class='pet-profile'>
    <h2>{{ pet.name | capitalize}}</h2>
    <div class='woofing'> Currently woofing</div>
    <img :src="pet.sprites.front_default"/>
    <div class='bottom-row'>
      <span v-for="(type, index) in pet.types" :key="index">{{type.name}}</span>
    </div>
  </div>
  
</template>

<script>
import PetFinderService from "@/services/PetFinderService.js";

export default {
  props: {
    pet: Object
  }, filters: {
    capitalize: function(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>

  .pet-profile h2 {
      margin-bottom: 4px;
  }
  .pet-profile { 
    width: 40%;
    margin: auto;
    height: 400px;
    border: solid 1px #e0e0e040;
    border-radius: 25px;
    box-shadow: 0px 20px 20px 5px #0000001f;
  }

  .woofing {
    color: #e8ad51;
    font-weight: bold;
    text-shadow: 0px 1px 1px #e6e6e638;
  }
    
</style>