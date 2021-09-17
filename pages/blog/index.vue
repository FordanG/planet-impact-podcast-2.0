<template>
  <div>
    <p-header heading="Blog" />
    <div class="container">
      <p-blog v-for="blog in blogs" :key="blog.slug" :details="blog" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blog').fetch()

    return { blogs }
  },

  head() {
    return {
      title: `Planet Impact Podcast | Blog`,
      meta: [
        {
          hid: 'Blog',
          name: 'description',
          content: 'Blog'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
