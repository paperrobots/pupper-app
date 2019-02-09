<template>
  <div class="home">
    <PetProfileList/>
  </div>
</template>

<script>
// @ is an alias to /src
import PetProfileList from "@/components/PetProfileList.vue";

export default {
  name: "home",
  components: {
    PetProfileList
  }
};
</script>
