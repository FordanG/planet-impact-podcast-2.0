<template>
  <div class="container px-5 md:px-8 lg:px-12 xl:px-0">
    <p-header heading="About the Host" />
    <div class="flex flex-col lg:flex-row ">
      <div class="w-full order-2 lg:order-1 lg:w-1/2 flex flex-col space-y-4">
        <nuxt-content :document="about" class="prose prose-lg mx-auto" />
        <img
          src="~assets/img/signature.jpg"
          width="60%"
          alt="Manthan Shah - Signature"
        />
      </div>
      <div
        class="lg:pl-5 w-full order-1 lg:order-2 lg:w-1/2 flex justify-center"
      >
        <nuxt-img
          format="webp"
          quality="80"
          :src="about.image"
          alt="Manthan Shah - Planet Impact Podcast Host"
          class="object-cover lazyload"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const about = await $content('about', 'about').fetch()
    return { about }
  }
}
</script>

<style lang="scss" scoped></style>
