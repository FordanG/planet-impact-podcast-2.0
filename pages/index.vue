<template>
  <div>
    <!-- <p-testimonials /> -->
    <header>
      <div class="w-full">
        <div class="welcomeHeader">
          <div class="container">
            <div
              class="flex p-0 justify-center md:justify-end items-center"
              style="height: 240px"
            >
              <h1
                class="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold text-secondary text-center md:text-right"
              >
                Welcome to the <br />Planet Impact Podcast!
              </h1>
            </div>
          </div>
        </div>

        <div class="bg-primary py-4 pb-10">
          <div class="container">
            <div class="flex flex-col lg:flex-row justify-center">
              <div
                class="w-full lg:w-1/4 flex flex-col items-center text-center md:text-left -mt-12"
                style="max-width: 410px"
              >
                <img
                  src="~assets/img/host.png"
                  alt="Planet Impact Podcast Host"
                  class="h-64"
                />
                <h2 class="pt-2 font-extrabold text-2xl text-secondary">
                  MANTHAN SHAH
                </h2>
                <h3 class="font-semibold text-xl text-white">
                  Founder and Host
                </h3>
              </div>
              <div
                class="w-full lg:w-3/5 flex flex-col text-center md:text-left pt-4"
              >
                <iframe
                  src="https://anchor.fm/manthanshah/embed/episodes/Planet-Impact-Trailer-eeo670/a-a2tsmcj"
                  height="125px"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
                <!-- <iframe src="https://open.spotify.com/embed-podcast/episode/19q6is7UQduvf5gpMqCDbX?autoplay=1" width="100%" height="120px" frameborder="0" allowtransparency="true" allow="encrypted-media" scrolling="no" allow="autoplay"></iframe> -->
                <h2 class="text-2xl text-white font-bold pb-5">
                  Planet Impact is a weekly show on how non-conformist social
                  entrepreneurs are changing the world.
                </h2>
                <div class="flex space-x-4">
                  <a
                    href="https://open.spotify.com/show/2DH4al5BKHLaVqvIM7m5FD?si=M36sDf-VRLiLJFMe2gU_sQ"
                    ><img src="~assets/img/spotify-podcasts-badge.png" alt=""
                  /></a>
                  <a
                    href="https://podcasts.apple.com/us/podcast/planet-impact/id1493651328?at=1l3vwYf"
                    ><img src="~assets/img/apple-podcasts-badge.png" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container flex flex-col items-center">
      <p-header heading="Featured Episodes" />
      <section class="space-y-8 w-full lg:w-2/3">
        <div
          class="
          xl:gap-16
          gap-10
          grid grid-auto-flow
          lg:grid-cols-3
          md:grid-cols-3
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
      <n-link
        class="self-center my-8 py-2 px-10 bg-primary text-white rounded"
        to="/episodes"
        >See all Episodes
      </n-link>
    </div>

    <!-- Testimonials -->
    <section class="container flex flex-col items-center">
      <div>
        <p-header heading="Kind Words From Our Listeners" />
      </div>
      <div
        class="flex lg:flex-row flex-col space-y-5 lg:items-baseline items-center"
      >
        <p-testimonial
          v-for="testimonial in landing.testimonials"
          :key="testimonial.name"
          :details="testimonial"
        />
      </div>
    </section>
  </div>
</template>

<script>
import PTestimonials from '../components/PTestimonials.vue'
export default {
  components: { PTestimonials },
  async asyncData({ $content }) {
    const landing = await $content('landing').fetch()

    const episodes = await $content('episodes')
      .where({
        slug: { $in: landing.featured[0].episodes }
      })
      .sortBy('number', 'desc')
      .fetch()
    return { landing, episodes }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.welcomeHeader {
  background-image: url(~assets/img/header.svg);
  background-size: cover;
  background-repeat: no-repeat;
  /* backdrop-filter: opacity(50%);
  backdrop-filter: brightness(150%);
  backdrop-filter: contrast(40%); */
  /* height: 240px; */
}

.host {
  margin-top: -45px;
}

.host h2 {
  font-size: 28px;
  font-style: normal;
  color: #22486a;
}

.host h3 {
  font-size: 20px;
  font-style: normal;
  color: #fff;
}
</style>
