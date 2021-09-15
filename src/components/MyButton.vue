<template>
<button :style="{ background, color }">
  Click me!
</button>
</template>

<script>
  export default {
    props: {
      color: {
        type: String
      },
      background: {
        type: String
      },
      disabled: {
        type: Boolean
      }
    }
  }
</script>

<style scoped>
button {
  background: none;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  cursor: pointer;
}
button:hover {
  filter: brightness(125%);
}
</style>