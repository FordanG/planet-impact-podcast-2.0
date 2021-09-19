<template>
  <div class="xl:mb-12 mb-8">
    <div
      class="
        text-secondary
        xl:px-0
        md:pt-16
        pt-10
      "
    >
      <h1
        class="
          text-center
          uppercase
          text-3xl
          font-bold
          tracking-wide
        "
      >
        {{ heading }}
      </h1>
      <hr class="container border-2 border-gray-200 w-full mt-2" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    heading: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
// h1:after {
//   content: '';
//   @apply block absolute border-2 border-gray-200 w-screen mt-3;
// }
</style>
