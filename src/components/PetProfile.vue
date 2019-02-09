<template>
  <div>{{ pet.name }}</div>
</template>

<script>
import PetFinderService from "@/services/PetFinderService.js";

export default {
  props: ["pet"]
};
</script>

<style scoped>
</style>