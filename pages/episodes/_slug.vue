<template>
  <section class="px-5 md:px-0 space-y-8">
    {{ episode.url }}
    <iframe
      :src="episode.link"
      height="100%"
      width="100%"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <div class="title space-y-2 mx-auto xl:mt-32 lg:mt-24 md:mt-16 mt-12">
      <h1
        class="text-2xl text-center md:text-left md:text-5xl font-semibold text-primary"
      >
        {{ episode.title }}
      </h1>
      <hr class="border-2 border-secondary" />

      <div class="flex space-x-4 justify-center md:justify-start">
        <div class="text-center md:text-left">
          <p class="block underline">{{ episode.name }}</p>
        </div>
      </div>
    </div>

    <div class="">
      <img
        :src="episode.image"
        :alt="episode.title"
        class="object-cover w-screen blogImage"
      />
    </div>
    <article class="container">
      <nuxt-content :document="episode" class="prose prose-xl mx-auto" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const episode = await $content('episodes', params.slug).fetch()

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
