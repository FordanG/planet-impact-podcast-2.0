<template>
  <nuxt-link :to="`/episodes/${details.slug}`" class="hover:scale-102">
    <div
      class="transform hover:scale-102 transition-scale duration-100 ease-in-out"
    >
      <img :src="details.display" :alt="details.title" />
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
.card {
  min-height: 15.625rem;
}
</style>
