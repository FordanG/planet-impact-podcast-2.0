<template>
  <footer class="bg-primary w-full">
    <div
      class="
        container
        py-10
        grid
        md:grid-cols-3
        gap-3
        grid-cols-1
        px-10
        md:px-0
      "
    >
      <div class="flex flex-col text-white">
        <h3>Connect with Us</h3>
        <div class="space-y-2">
          <div>
            <a href="mailto:thegoodpeoplepodcastseries@gmail.com">
              <email-icon class="pr-2 inline" />
              thegoodpeoplepodcastseries@gmail.com</a
            >
          </div>
          <div>
            <a href="tel:+34653064589"
              ><phone-icon class="pr-2 inline" />+34 653064589</a
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col text-white">
        <h3>India Address</h3>
        <p>
          Ahmednagar, 414001 - India
        </p>
      </div>
    </div>
    <div class="bg-secondary text-primary py-2">
      <div
        class="
          container
          flex flex-col
          md:flex-row
          justify-between
          items-center
          px-10
          md:px-0
        "
      >
        <p id="copyright" class="text-white order-1 md:order-0">
          All Rights Reserved | Planet Impact Podcast
          {{ new Date().getFullYear() }}
        </p>
        <div class="flex space-x-2 order-0 md:order-1">
          <a href="https://www.facebook.com/135manthan"
            ><facebook-icon class="primary"
          /></a>
          <a href="https://twitter.com/ManthanShah135"
            ><twitter-icon class="primary"
          /></a>
          <a href="https://www.instagram.com/planetimpactpod/?hl=en"
            ><instagram-icon class="primary"
          /></a>
          <a href="https://www.linkedin.com/in/manthanshh/"
            ><linked-in-icon class="primary"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
h3 {
  @apply uppercase text-secondary md:text-lg font-bold mb-2;
}

p {
  @apply text-sm md:text-base;
}

#copyright {
  @apply text-xs;
}
</style>
