<template>
  <div>
    <div class="vimg">
      <img
        :src="`/assets/compressed/${compressedSrc}`"
        :data-original="`/assets/original/${src}`"
      />
      <div v-if="isGif" class="vimg__play-btn">&#9654;</div>
    </div>
  </div>
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
    isGif() {
      return this.src.lastIndexOf('.gif') != -1
    },

    compressedSrc() {
      return this.src.substr(0, this.src.lastIndexOf('.')) + '.jpg'
    }
  }
}
</script>

<style>
.vimg {
  position: relative;
  display: inline-block;
}

.vimg__play-btn {
  position: absolute;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 7rem;
  text-shadow: 0 0 10px black;
}
</style>
