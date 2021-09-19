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
        <p>{{ episode.socmed }}</p>
        <p>{{ episode.contact }}</p>
        <!-- <p
          v-for="contact in episode.contact"
          :key="contact.slug"
          :details="contact"
        />{{contact.platform}}</p> -->
        <a v-for="contact in episode.contact" :href="contact.url">
          {{ `> ${contact.platform}: ${contact.handle}` }}
        </a>
        <a v-for="socmed in episode.socmed" :href="socmed.url">
          {{ `> ${socmed.platform}: ${socmed.handle}` }}
        </a>
        </p>
      </div>
    </div>
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
