<template>
  <div>
    <section id="un-support" class="px-2 py-4">
      <div class="container flex flex-col items-center">
        <div class="flex w-full px-4 md:w-1/3">
          <div class="flex justify-center items-center w-1/2">
            <nuxt-img
              format="webp"
              quality="80"
              sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
              width="100%"
              height="100%"
              class="pr-5 lazyload"
              src="/img/planet-impact-podcast-circular-logo.png"
              style="border-right:#111 1px solid"
              alt="Planet Impact Podcast Circular Logo"
            />
          </div>
          <div class="flex justify-center items-center w-1/2">
            <nuxt-img
              format="webp"
              quality="80"
              sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
              width="100%"
              height="100%"
              class="pl-5 lazyload"
              src="/img/E_SDG_logo_without_UN_emblem_Square_Transparent_WEB.png"
              alt="UN SDG 17"
            />
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <p>
              Planet Impact Podcast supports the Sustainable Development Goals
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer class="bg-primary w-full">
      <div
        class="
        container
        py-10
        grid
        md:grid-cols-3
        gap-3
        grid-cols-1
        px-5
        xl:px-0
      "
      >
        <div class="flex flex-col text-white">
          <h3>Planet Impact Podcast</h3>
          <p>
            Planet Impact is a weekly show on how non-conformist social
            entrepreneurs are changing the world.
          </p>
        </div>
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
      </div>
      <div class="w-full bg-secondary text-primary py-2 ">
        <div
          class="
          container
          flex flex-col
          md:flex-row
          justify-between
          items-center
          px-5
        xl:px-0
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
  </div>
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

#un-support {
  background-color: rgb(241, 241, 241);
}
</style>
