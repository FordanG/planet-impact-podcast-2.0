<template>
  <div>
    <header>
      <div class="w-full">
        <div class="welcomeHeader">
          <div class="container">
            <div
              class="flex p-0 justify-center md:justify-end items-center"
              style="height: 240px"
            >
              <h1
                class="xl:text-6xl lg:mr-20 lg:text-5xl text-3xl font-bold text-secondary text-center md:text-right "
                data-aos="zoom-in-up"
              >
                Welcome to the <br />Planet Impact Podcast!
              </h1>
            </div>
          </div>
        </div>

        <div class="bg-primary py-4 pb-10">
          <div class="container px-5 md:px-8 lg:px-12 xl:px-0">
            <div class="flex flex-col lg:flex-row justify-center lg:space-x-16">
              <div
                class="w-full lg:w-1/4 flex flex-col items-center text-center md:text-left -mt-12"
                style="max-width: 410px"
              >
                <img
                  src="~assets/img/host.png"
                  alt="Planet Impact Podcast Host"
                  class="h-64 lazyload"
                />

                <h2 class="pt-2 font-extrabold text-2xl text-secondary">
                  MANTHAN SHAH
                </h2>
                <h3 class="font-semibold text-xl text-white">
                  Founder and Host
                </h3>
              </div>
              <div
                class="w-full lg:w-7/12 flex flex-col text-center md:text-left pt-4 lg:px-6"
              >
                <iframe
                  title="Planet Impact Podcast Trailer"
                  src="https://anchor.fm/manthanshah/embed/episodes/Planet-Impact-Trailer-eeo670/a-a2tsmcj"
                  height="125px"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
                <!-- <iframe src="https://open.spotify.com/embed-podcast/episode/19q6is7UQduvf5gpMqCDbX?autoplay=1" width="100%" height="120px" frameborder="0" allowtransparency="true" allow="encrypted-media" scrolling="no" allow="autoplay"></iframe> -->
                <h2 class="text-2xl text-white font-semibold pb-5">
                  Planet Impact is a weekly show on how non-conformist social
                  entrepreneurs are changing the world.
                </h2>
                <div class="flex space-x-4">
                  <a
                    href="https://open.spotify.com/show/2DH4al5BKHLaVqvIM7m5FD?si=M36sDf-VRLiLJFMe2gU_sQ"
                    ><img
                      src="~assets/img/spotify-podcasts-badge.png"
                      alt="spotify button"
                      class="lazyload"
                  /></a>
                  <a
                    href="https://podcasts.apple.com/us/podcast/planet-impact/id1493651328?at=1l3vwYf"
                    ><img
                      src="~assets/img/apple-podcasts-badge.png"
                      alt="apple podcast button"
                      class="lazyload"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div
      class="container px-5 md:px-8 lg:px-12 xl:px-0 flex flex-col items-center"
    >
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
    <section class="bg-primary pb-16">
      <div
        class="container flex flex-col items-center px-5 md:px-8 lg:px-12 xl:px-0"
      >
        <div>
          <p-header heading="Kind Words From Our Listeners" />
        </div>
        <div
          class="flex lg:flex-row flex-col space-y-5 lg:items-baseline items-center"
        >
          <p-testimonial
            v-for="testimonial in landing.testimonials"
            data-aos="flip-left"
            :key="testimonial.name"
            :details="testimonial"
          />
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section id="partners" class="mb-20">
      <div class="container px-5 md:px-8 lg:px-12 xl:px-0">
        <div class="flex justify-center">
          <p-header heading="Our Partners" />
        </div>
        <div
          class="flex lg:flex-row flex-col lg:space-x-12 space-y-16 lg:space-y-0 justify-center items-center "
        >
          <div
            v-for="partner in landing.partners"
            :key="partner.name"
            class="w-4/5 lg:w-auto"
          >
            <a :href="partner.url" target="_blank">
              <nuxt-img
                format="webp"
                quality="80"
                class="lg:h-16 h-auto lazyload"
                data-aos="zoom-in-up"
                :src="partner.logo"
                :alt="`${partner.name} logo`"
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="mb-20">
      <div class="container px-5 md:px-8 lg:px-12 xl:px-0">
        <div class="flex justify-center">
          <p-header heading="Featured In" />
        </div>
        <div
          class="flex lg:flex-row flex-col lg:space-x-12 space-y-16 lg:space-y-0 justify-center items-center "
        >
          <div
            v-for="feature in landing.features"
            :key="feature.name"
            class="flex justify-center w-4/5 lg:w-auto"
          >
            <a :href="feature.url" target="_blank">
              <nuxt-img
                format="webp"
                quality="80"
                class="lg:h-16 h-auto "
                data-aos="zoom-in-up"
                :src="feature.logo"
                :alt="`${feature.name} logo`"
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section id="team" class="bg-primary pb-8">
      <div class="container px-5 md:px-8 lg:px-12 xl:px-0">
        <div class="flex justify-center mb-4">
          <p-header heading="Our Team" />
        </div>
        <div
          class="flex md:flex-row flex-col items-center space-y-12 md:space-y-0 justify-center text-center"
        >
          <div class="card md:w-1/4 w-full " data-aos="fade-up">
            <div class="card-content">
              <div class="card-body p-0">
                <div class="profile flex justify-center">
                  <img
                    src="~assets/img/Joe.jpeg"
                    class="border-4 border-secondary shadow lazyload"
                    alt="Joe Hawthorne Profile"
                  />
                </div>
                <div class="card-title">
                  <h3 class="font-semibold">Joe Hawthorne</h3>
                  <small>Producer</small>
                </div>
                <div class="card-subtitle">
                  <p class="mb-0">
                    <a
                      href="https://www.linkedin.com/in/joseph-eden-hawthorne-84650089/"
                      target="_blank"
                      ><i class="fa fa-linkedin" aria-hidden="true"></i
                    ></a>
                    <a
                      href="https://www.josephedenhawthorne.com/"
                      target="_blank"
                      ><i class="fa fa-globe" aria-hidden="true"></i
                    ></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card md:w-1/4 w-full " data-aos="fade-up">
            <div class="card-content">
              <div class="card-body p-0">
                <div class="profile flex justify-center">
                  <img
                    src="~assets/img/Indraneel.png"
                    class="border-4 border-secondary shadow lazyload"
                    alt="Indranel Joshi Profile"
                  />
                </div>
                <div class="card-title">
                  <h3 class="font-semibold">Indraneel Joshi</h3>
                  <small>Graphic Designer</small>
                </div>
                <div class="card-subtitle">
                  <p class="mb-0">
                    <a
                      href="https://www.instagram.com/indrawneel/?hl=en"
                      target="_blank"
                      ><i class="fa fa-instagram" aria-hidden="true"></i
                    ></a>
                    <a
                      href="https://www.linkedin.com/in/indraneel-joshi-a00b3a1b7/"
                      target="_blank"
                      ><i class="fa fa-linkedin" aria-hidden="true"></i
                    ></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card md:w-1/4 w-full " data-aos="fade-up">
            <div class="card-content">
              <div class="card-body p-0">
                <div class="profile flex justify-center">
                  <img
                    src="~assets/img/gab-pic.png"
                    class="border-4 border-secondary shadow lazyload"
                    alt="Gabriel Fordan Profile"
                  />
                </div>
                <div class="card-title">
                  <h3 class="font-semibold">Gabriel Fordan</h3>
                  <small>Web Developer</small>
                </div>
                <div class="card-subtitle">
                  <p class="mb-0">
                    <a
                      href="https://www.instagram.com/gabrieldf29"
                      target="_blank"
                      ><i class="fa fa-instagram" aria-hidden="true"></i
                    ></a>
                    <a
                      href="https://www.linkedin.com/in/gabrielfordan/"
                      target="_blank"
                      ><i class="fa fa-linkedin" aria-hidden="true"></i
                    ></a>
                    <a href="https://gabrielfordan.xyz/" target="_blank"
                      ><i class="fa fa-globe" aria-hidden="true"></i
                    ></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card md:w-1/4 w-full " data-aos="fade-up">
            <div class="card-content">
              <div class="card-body p-0">
                <div class="profile flex justify-center">
                  <img
                    src="~assets/img/host.png"
                    class="border-4 border-secondary shadow lazyload"
                    alt="Manthan Shah Profile"
                  />
                </div>
                <div class="card-title">
                  <h3 class="font-semibold">Manthan Shah</h3>
                  <small>Founder and Host</small>
                </div>
                <div class="card-subtitle">
                  <p class="mb-0">
                    <a
                      href="https://www.instagram.com/manthanshh"
                      target="_blank"
                      ><i class="fa fa-instagram" aria-hidden="true"></i
                    ></a>

                    <a
                      href="https://www.linkedin.com/in/manthanshh/"
                      target="_blank"
                      ><i class="fa fa-linkedin" aria-hidden="true"></i
                    ></a>
                    <a
                      href="https://www.facebook.com/135manthan"
                      target="_blank"
                      ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="vote-form">
      <div class="container px-5 md:px-8 lg:px-12 xl:px-0">
        <div class="flex justify-center">
          <div class="col">
            <div class="well well-sm">
              <form
                class="form-horizontal"
                name="voting-form"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <fieldset>
                  <p-header
                    heading="Tell us who you want to be our next guest!"
                  />

                  <!-- Name input-->
                  <div class="form-group flex justify-center mb-2">
                    <div class="w-full lg:w-1/2 text-center">
                      <input
                        type="hidden"
                        name="form-name"
                        value="voting-form"
                      />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name of Guest"
                        class="text-center appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      />
                    </div>
                  </div>

                  <!-- Form actions -->
                  <div class="form-group">
                    <div class="col text-center">
                      <button
                        type="submit"
                        class="shadow w-full lg:w-1/2 border-2 border-primary hover:bg-primary focus:shadow-outline focus:outline-none text-primary hover:text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
@import 'aos/dist/aos.css';
.welcomeHeader {
  background-image: url(~assets/img/header.svg);
  background-size: cover;
  background-repeat: no-repeat;
}

#vote-form {
  padding: 2rem 0;
}

#vote-form h3 {
  color: #22486a;
}

#team h2 {
  color: #fff;
}

#team .icon {
  position: relative;
  bottom: 11px;
}

#team .profile img {
  width: 85px;
  height: 85px;
  border-radius: 50%;
}

#team .col-md-3 {
  padding: 0 1rem;
}

#team .card {
  padding: 0.5rem 2rem;
  border-radius: 15px;
  background-color: transparent;
  border: none;
}

#team .card-content {
  background-color: white;
  padding: 0rem 2rem;
  border-radius: 15px;
}

#team .card-body {
  position: relative;
  bottom: 35px;
}

#team .header {
  padding-top: 10px;
}

#team a {
  color: #94c11f;
  padding: 0 10px;
}

#team a:hover {
  color: #4b6113;
}
</style>
