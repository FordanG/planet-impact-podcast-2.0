<template>
  <section class="container pt-20 md:px-0 space-y-10">
    <iframe
      :src="episode.url"
      height="100%"
      width="100%"
      frameborder="0"
      scrolling="no"
    ></iframe>

    <div class="flex">
      <div class="w-1/2 px-5">
        <h1 class="text-3xl font-bold text-secondary">{{ episode.name }}</h1>
        <hr />
        <nuxt-content :document="episode" class="prose prose-xl mx-auto" />
      </div>
      <div class="w-1/2 px-5">
        <img :src="episode.image" :alt="episode.title" />

        <p>{{ episode.contact }}</p>
        <nuxt-content :document="episode.contact" class="prose" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const episode = await $content('episodes', params.slug)
      .sortBy('number')
      .fetch()

    return { episode }
  },
  head() {
    return {
      title: `Planet Impact Podcast | ${this.episode.title}`,
      meta: [
        {
          hid: this.episode.slug,
          name: 'description',
          content: this.episode.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// h1::after {
//   content: '';
//   @apply absolute block left-0  w-screen border-2 border-secondary;
// }
.title {
  max-width: 65ch;
}

.blogImage {
  height: 70vh;
}
</style>
