<template>
  <img
    :src="`/assets/compressed/${src}`"
    :data-original="`/assets/original/${src}`"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
