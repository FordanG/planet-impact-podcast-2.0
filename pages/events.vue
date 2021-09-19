<template>
  <div class="container">
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
  }
}
</script>

<style lang="scss" scoped></style>
