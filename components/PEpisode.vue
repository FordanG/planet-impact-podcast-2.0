<template>
  <nuxt-link :to="`/episodes/${details.slug}`" class="hover:scale-102">
    <div
      class="transform hover:scale-102 transition-scale duration-100 ease-in-out"
    >
      <div class="relative h-0 wrapper">
        <!-- <img
          :src="details.display"
          :alt="details.title"
          class="absolute top-0 left-0 max-w-full h-auto lazyload"
        /> -->
        <picture>
          <source :data-srcset="`${details.display}?webp`" type="image/webp" />
          <source :data-srcset="`${details.display}`" type="image/png" />
          <img
            :data-src="`${details.display}`"
            class="h-64 lazyload"
            :alt="details.title"
          />
        </picture>
      </div>
      <h2 class="font-bold text-2xl text-center text-secondary">
        {{ details.title }}
      </h2>
      <p class="text-center text-lg text-secondary">{{ details.subtitle }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: calc(360 / 360 * 100%);
}
</style>
