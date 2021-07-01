<template>
  <div class="home-carousel">
    <h2>{{ title }}</h2>
    <carousel arrows center-mode :slides-to-show="numSlides" swipe-to-slide>
      <a
        v-for="(slide, i) in slides"
        :key="i"
        :href="slide.url"
        target="_blank"
      >
        <div class="slide">
          <img :src="slide.img" />
          <div class="title">{{ slide.title }}</div>
          <div class="description">{{ slide.description }}</div>
        </div>
      </a>
    </carousel>
  </div>
</template>

<script>
export default {
  props: ['numSlides', 'slides', 'title'],
}
</script>

<style scoped>
.home-carousel img {
  border-radius: 6px;
}

.home-carousel .slide {
  padding: 0 0.25em;
}

.home-carousel .slide > .title {
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.2em;
}

.home-carousel .slide > .description {
  font-size: 0.8em;
}
</style>
