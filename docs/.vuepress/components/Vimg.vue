<template>
  <img
    :src="`/assets/compressed/${computedSrc}`"
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
  },

  computed: {
    computedSrc() {
      const ext = this.src.substr(this.src.lastIndexOf('.') + 1);
      if (ext === 'gif') return this.src;
      return this.src.substr(0, this.src.lastIndexOf('.')) + '.jpg';
    }
  }
};
</script>

<style></style>
