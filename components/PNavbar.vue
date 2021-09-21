<template>
  <nav
    class="
      shadow
      font-header font-bold
      text-white
      uppercase
      sticky
      top-0
      bg-primary
      transition-all
      mx-auto
      w-full"
  >
    <div class="container px-5 md:px-8 lg:px-12 xl:px-0">
      <div class="flex items-center justify-between">
        <!-- Header logo -->
        <div>
          <n-link :to="links[0].link">
            <p-logo class="h-20" />
          </n-link>
        </div>

        <!-- Mobile toggle -->
        <div class="md:hidden">
          <button @click="drawer">
            <svg
              class="h-8 w-8 fill-current text-white"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Navbar -->
        <div class="hidden md:block">
          <div class="space-x-5">
            <n-link v-for="link in links" :key="link.label" :to="link.link">
              {{ link.label }}
            </n-link>
          </div>
        </div>

        <!-- Dark Background Transition -->
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div
            @keydown.esc="isOpen = false"
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity"
          >
            <div
              @click="isOpen = false"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"
            ></div>
          </div>
        </transition>

        <!-- Drawer Menu -->
        <aside
          class="p-5 transform top-0 left-0 w-64 bg-primary fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="close">
            <button
              class="absolute top-0 right-0 mt-4 mr-4"
              @click="isOpen = false"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <span
            @click="isOpen = false"
            class="flex w-full items-center p-4 border-b"
          >
            <n-link :to="links[0].link">
              <p-logo class="h-20" />
            </n-link>
          </span>

          <ul
            class="tracking-wider text-white text-2xl "
            @click="isOpen = false"
          >
            <n-link
              v-for="link in links"
              :key="link.label"
              :to="link.link"
              class="block border-t py-4"
            >
              {{ link.label }}
            </n-link>
          </ul>

          <div class="mt-8">
            <div class="flex justify-around text-secondary">
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
        </aside>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
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
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false
    })
  }
}
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active,
.nuxt-link-active:not(.nuxt-link-active:first-child) {
  @apply text-secondary;
}

.max-w-1320 {
  max-width: 1320px;
}

nav {
  z-index: 10000;
}
</style>
