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
      <img
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
          hid: this.blog.slug,
          name: 'description',
          content: this.blog.description
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
