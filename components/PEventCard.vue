<template>
  <div class="flex lg:flex-row flex-col">
    <div class="px-5 w-full lg:order-1 lg:w-1/2 flex flex-col mb-4">
      <nuxt-img
        format="webp"
        quality="80"
        :src="details.image"
        :alt="details.image"
        class="block h-full w-full object-cover lazyload"
      />
    </div>
    <div
      class="w-full lg:order-2 lg:w-1/2 flex flex-col lg:space-y-4 space-y-1"
    >
      <h2 class="text-center text-2xl font-bold lg:text-3xl text-primary">
        {{ details.title }}
      </h2>
      <p class="text-center text-lg font-semibold lg:text-xl text-secondary">
        {{ details.date }}
      </p>
      <hr class="py-2" />
      <p class="prose prose-md">{{ details.description }}</p>
    </div>
  </div>
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

<style lang="scss" scoped></style>
