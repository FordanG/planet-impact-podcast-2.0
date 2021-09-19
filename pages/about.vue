<template>
  <div class="px-5">
    <p-header heading="About the Host" />
    <div class="container flex flex-col lg:flex-row ">
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
        <img
          :src="about.image"
          alt="Manthan Shah - Planet Impact Podcast Host"
          class="object-cover"
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
