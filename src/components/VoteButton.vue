<template>
  <button :class="type">{{ type }}</button>
</template>

<script>
export default {
  props: ["type"]
};
</script>

<style lang="scss" scoped>
button {
  border: 2px solid;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: none;
  color: black;
  margin: 1rem;
  transition: all 0.3s ease;

  &.like {
    border-color: greenyellow;

    &:hover {
      box-shadow: 0px 0px 20px rgba(greenyellow, 0.9);
    }
  }

  &.dislike {
    border-color: tomato;

    &:hover {
      box-shadow: 0px 0px 20px rgba(tomato, 0.7);
    }
  }

  &:focus {
    outline: none;
  }
}
</style>