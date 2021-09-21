<template>
  <section
    class="container px-5 md:px-8 lg:px-12 xl:px-0 md:pt-20 pt-5 lg:space-y-10"
  >
    <iframe
      :src="episode.url"
      height="100%"
      width="100%"
      frameborder="0"
      scrolling="no"
    ></iframe>

    <div class="flex lg:flex-row flex-col">
      <div class="w-full lg:w-1/2 px-5">
        <h1 class="text-3xl font-bold text-secondary">{{ episode.name }}</h1>
        <hr />
        <nuxt-content :document="episode" class="prose prose-xl mx-auto" />
      </div>
      <div class="w-full lg:w-1/2 px-5 space-y-4">
        <div class="relative h-0 wrapper">
          <nuxt-img
            format="webp"
            quality="75"
            :src="episode.image"
            :alt="episode.title"
            class="absolute top-0 left-0 max-w-full h-auto lazyload"
          />
        </div>

        <div class="ml-2 space-y-2">
          <h2
            v-if="episode.contact.length !== 0"
            class="font-bold uppercase text-secondary"
          >
            {{
              `Learn more about ${episode.name.substr(
                0,
                episode.name.indexOf(' ')
              )}:`
            }}
          </h2>
          <p-contact
            v-for="contact in episode.contact"
            :key="contact.slug"
            :details="contact"
          />
        </div>

        <div class="ml-2 space-y-2">
          <h2
            v-if="episode.socmed.length !== 0"
            class="font-bold uppercase text-secondary"
          >
            {{
              `Get in Touch with ${episode.name.substr(
                0,
                episode.name.indexOf(' ')
              )}:`
            }}
          </h2>
          <p-contact
            v-for="socmed in episode.socmed"
            :key="socmed.slug"
            :details="socmed"
          />
        </div>

        <div class="ml-2 space-y-2">
          <h2 class="font-bold uppercase text-secondary">
            Follow Manthan and Planet Impact Podcast:
          </h2>
          <p class="ml-3">
            <span>> Instagram: </span
            ><a
              class="text-primary underline hover:text-secondary"
              href="https://www.instagram.com/manthanshh/?hl=en"
            >
              @manthanshh
            </a>
          </p>
          <p class="ml-3">
            <span>> Instagram: </span
            ><a
              class="text-primary underline hover:text-secondary"
              href="https://www.instagram.com/planetimpactpod/?hl=en"
            >
              @planetimpactpod
            </a>
          </p>
          <p class="ml-3">
            <span>> LinkedIn: </span
            ><a
              class="text-primary underline hover:text-secondary"
              href="https://www.linkedin.com/in/manthanshh/"
            >
              Manthan Shah
            </a>
          </p>
        </div>
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
          hid: this.episode.title,
          name: 'description',
          content: this.episode.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: calc(360 / 360 * 100%);
}
.title {
  max-width: 65ch;
}

.blogImage {
  height: 70vh;
}
</style>
