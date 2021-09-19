<template>
  <div>
    <p-header heading="About the Host" />
    {{ about }}
    <div class="flex container">
      <div class="w-1/2">
        <p>{{ about.description }}</p>
      </div>
      <div class="w-1/2"></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const [about] = await $content('about').fetch()
    return { about }
  }
}
</script>

<style lang="scss" scoped></style>
