<template>
  <p class="ml-3">
    <span>{{ `> ${details.platform}: ` }}</span
    ><a class="text-primary underline hover:text-secondary" :href="details.url">
      {{ details.handle }}
    </a>
  </p>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
