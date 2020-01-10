<template>
  <div class="vimg">
    <img
      :src="`/assets/compressed/${compressedSrc}`"
      :data-original="`/assets/original/${src}`"
    />
    <div v-if="isGif" class="vimg__play-btn"></div>
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
    compressedSrc() {
      return this.src.substr(0, this.src.lastIndexOf('.')) + '.jpg';
    },

    isGif() {
      return this.src.substr(this.src.lastIndexOf('.') + 1) === 'gif';
    }
  }
};
</script>

<style>
.vimg {
  position: relative;
  display: inline-block;
}
.vimg__play-btn {
  position: absolute;
  pointer-events: none;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-left: 50px solid #29a1ff;
  border-bottom: 25px solid transparent;
}
</style>
