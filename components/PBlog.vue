<template>
  <nuxt-link :to="`/blog/${details.slug}`" class="hover:scale-102">
    <div
      class="
        relative
        overflow-hidden
        bg-white
        shadow-around
        rounded
        card
        flex
        flex-col
        transform
        transition-scale
        duration-100
        ease-in-out
        hover:scale-102
        mb-8
      "
    >
      <div
        class="w-full order-2 md:order-1 md:w-2/3 flex flex-col justify-between md:p-12 p-10 space-y-4"
      >
        <div>
          <h2 class="text-xl md:text-2xl font-semibold text-primary">
            {{ details.title }}
          </h2>
          <p class="mt-2">{{ details.description }}</p>
        </div>
        <div class="flex text-secondary space-x-8 items-center">
          <div class="flex">
            <chevron-icon />
            <p>{{ details.author }}</p>
          </div>
          <div class="flex">
            <calendar-icon class="secondary mr-2" />
            <p>
              {{
                new Date(details.date).toLocaleString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })
              }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="w-full order-1 md:order-2 md:absolute md:right-0 md:top-0 md:bottom-0 md:w-1/3"
      >
        <nuxt-img
          format="webp"
          quality="80"
          :src="details.image"
          :alt="details.image"
          class="block h-full w-full object-cover lazyload"
        />
      </div>
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
