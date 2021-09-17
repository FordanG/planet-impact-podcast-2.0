<template>
  <nav
    class="
      z-50
      shadow
      font-header font-bold
      text-white
      uppercase
      sticky
      top-0
      bg-primary
      transition-all
      mx-auto
      w-full
    "
  >
    <div class="container">
      <div class="hidden md:flex justify-between md:items-center">
        <div>
          <n-link :to="links[0].link">
            <p-logo class="h-20" />
          </n-link>
        </div>
        <div class="space-x-5">
          <n-link v-for="link in links" :key="link.label" :to="link.link">
            {{ link.label }}
          </n-link>
        </div>
      </div>
      <div class="flex md:hidden">
        <div>sandwich</div>
        <p-logo class="mx-auto w-32" />
        <div class="invisible">sandwich</div>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      links: [
        {
          label: 'Home',
          link: '/'
        },
        {
          label: 'About',
          link: '/about'
        },
        {
          label: 'Episodes',
          link: '/episodes'
        },
        {
          label: 'Events',
          link: '/events'
        },
        {
          label: 'Blog',
          link: '/blog'
        },
        {
          label: 'Contact',
          link: '/contact'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active,
.nuxt-link-active:not(.nuxt-link-active:first-child) {
  @apply text-secondary;
}

.max-w-1320 {
  max-width: 1320px;
}
</style>
