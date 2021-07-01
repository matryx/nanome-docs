<template>
  <carousel
    class="hero-carousel slick-dark"
    arrows
    autoplay
    :autoplay-speed="5000"
    dots
  >
    <a v-for="(slide, i) in slides" :key="i" :href="slide.url" class="slide">
      <img :src="slide.img" />
      <div class="content">
        <h1>{{ slide.title }}</h1>
        <p>{{ slide.description }}</p>
      </div>
    </a>
  </carousel>
</template>

<script>
export default {
  props: ['slides'],
}
</script>

<style scoped>
.hero-carousel img {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
}

.hero-carousel .slide {
  position: relative;
}

.hero-carousel .content {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10%;
  color: white;
}
</style>
