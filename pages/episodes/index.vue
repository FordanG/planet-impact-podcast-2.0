<template>
  <div>
    <p-header heading="Episodes" />
    <section class="container space-y-8">
      <div
        class="
          xl:gap-20
          gap-10
          grid grid-auto-flow
          lg:grid-cols-3
          md:grid-cols-2
          sm:grid-cols-1
          xl:px-0
          px-5
        "
      >
        <p-episode
          v-for="episode in episodes"
          :key="episode.slug"
          :details="episode"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const episodes = await $content('episodes').fetch()
    return { episodes }
  },
  head() {
    return {
      title: `Planet Impact Podcast | Episodes`,
      meta: [
        {
          hid: 'Episodes',
          name: 'description',
          content: 'Episodes'
        }
      ]
    }
  }
})
</script>

<style scoped></style>
