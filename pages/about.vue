<template>
  <div class="container px-5 md:px-8 lg:px-12 xl:px-0">
    <p-header heading="About the Host" />
    <div class="flex flex-col lg:flex-row ">
      <div class="w-full order-2 lg:order-1 lg:w-1/2 flex flex-col space-y-4">
        <nuxt-content :document="about" class="prose prose-lg mx-auto" />
        <div class="w-7/12">
          <nuxt-img
            format="webp"
            quality="80"
            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
            src="/img/signature.jpg"
            width="60%"
            alt="Manthan Shah - Signature"
          />
        </div>
      </div>
      <div
        class="lg:pl-5 w-full order-1 lg:order-2 lg:w-1/2 flex justify-center"
      >
        <nuxt-img
          format="webp"
          quality="80"
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          :src="about.image"
          alt="Manthan Shah - Planet Impact Podcast Host"
          class="lazyload"
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
  },
  head() {
    return {
      title: `Planet Impact Podcast | About`,
      meta: [
        {
          hid: 'About',
          name: 'description',
          content:
            'Planet Impact is a weekly show on how non-conformist social entrepreneurs are changing the world.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
