<template>
  <section class="px-5 md:px-8 lg:px-12 xl:px-0 space-y-8">
    <div class="title space-y-2 mx-auto xl:mt-32 lg:mt-24 md:mt-16 mt-12">
      <h1
        class="text-2xl text-center md:text-left md:text-5xl font-semibold text-primary"
      >
        {{ blog.title }}
      </h1>
      <hr class="border-2 border-secondary" />

      <div class="flex space-x-4 justify-center md:justify-start">
        <div class="text-center md:text-left">
          <p class="block underline">{{ blog.author }}</p>
          <p>
            <calendar-icon class="inline secondary" />
            {{
              new Date(blog.date).toLocaleString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })
            }}
          </p>
        </div>
      </div>
    </div>

    <div class="">
      <nuxt-img
        format="webp"
        quality="80"
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        :src="blog.image"
        :alt="blog.title"
        class="object-cover w-screen blogImage"
      />
    </div>
    <article class="container">
      <!-- <pre>{{ blog }}</pre> -->
      <nuxt-content :document="blog" class="prose prose-xl mx-auto" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch()

    return { blog }
  },
  head() {
    return {
      title: `Planet Impact Podcast | ${this.blog.title}`,
      meta: [
        {
          name: 'name',
          content: this.blog.title
        },
        {
          hid: this.blog.title,
          name: 'description',
          content: this.blog.description
        },
        {
          name: 'image',
          content: `https://planetimpactpod.com/${this.blog.image}`
        },

        // Facebook Open Graph
        {
          name: 'og:url',
          content: `https://planetimpactpod.com/blog/${this.blog.slug}`
        },
        {
          name: 'og:type',
          content: 'article'
        },
        {
          name: 'og:title',
          content: this.blog.title
        },
        {
          name: 'og:description',
          content: this.blog.description
        },
        {
          name: 'og:image',
          content: `https://planetimpactpod.com/${this.blog.image}`
        },
        {
          hid: this.blog.title,
          name: 'description',
          content: this.blog.description
        },

        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: this.blog.title
        },
        {
          name: 'twitter:description',
          content: this.blog.description
        },
        {
          name: 'twitter:image',
          content: `https://planetimpactpod.com/${this.blog.image}`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// h1::after {
//   content: '';
//   @apply absolute block left-0  w-screen border-2 border-secondary;
// }
.title {
  max-width: 65ch;
}

.blogImage {
  height: 70vh;
}
</style>
