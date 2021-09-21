<template>
  <div class="container px-5 md:px-8 lg:px-12 xl:px-0">
    <p-header heading="Events" />
    <div class="space-y-20">
      <p-event-card
        v-for="event in events"
        :key="event.slug"
        :details="event"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const events = await $content('events').fetch()
    return { events }
  },
  head() {
    return {
      title: `Planet Impact Podcast | Events`,
      meta: [
        {
          hid: 'Events',
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
