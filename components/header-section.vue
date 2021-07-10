<template>
  <header>
    <div ref="menuRef" class="menu">
      <div class="menu-inner">
        <div class="menu_logo">
          <Logo />
        </div>
        <div class="menu_main">
          <div>
            <div class="menu_icon" role="button" @click="handleMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>

            <ul class="menu_links">
              <li>
                <NuxtLink to="/services">Services</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/portfolio">Portfolio</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/web-development">Web development</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about">About us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/team">Team</NuxtLink>
              </li>
              <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="menu_call">
          <nuxt-link to="/free-trial"> 15 Days Free </nuxt-link>
        </div>
      </div>
    </div>

    <div v-if="menuIsActive" class="menu_popup-wrapper" @click="handleMenu">
      <ul class="menu_popup" @click.stop>
        <li>
          <NuxtLink to="/services">Services</NuxtLink>
          <hr />
        </li>
        <li>
          <NuxtLink to="/portfolio">Portfolio</NuxtLink>
          <hr />
        </li>
        <li>
          <NuxtLink to="/web-development">Web Development</NuxtLink>
          <hr />
        </li>
        <li>
          <NuxtLink to="/about">About us</NuxtLink>
          <hr />
        </li>
        <li>
          <NuxtLink to="/team">Team</NuxtLink>
          <hr />
        </li>
        <li>
          <NuxtLink to="/pricing">Pricing</NuxtLink>
          <hr />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Logo from "./logo.vue"

export default {
  name: "HeaderSection",
  components: {
    Logo,
  },
  computed: {
    menuIsActive() {
      return this.$store.state.menuIsActive
    },
  },
  mounted() {
    // Note: do not add parentheses () for this.handleScroll
    window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleMenu() {
      this.$store.commit("toggleMenuState")
    },
    handleScroll() {
      if (window.scrollY > 80) {
        this.$refs.menuRef.classList.add("white-background")
      } else {
        this.$refs.menuRef.classList.remove("white-background")
      }
    },
  },
}
</script>

<style lang="scss">
.section-header_background {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  max-height: 600px;
  height: 100%;
  width: 100%;
  z-index: -1;

  @screen sm {
    max-height: 400px;
  }
}
.section-header {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 500px;
  height: auto;
  padding: 2rem;

  @screen md {
    padding-top: 6rem;
  }

  @screen sm {
    padding-top: 3rem;
    margin: 0;
    min-height: 300px;
  }
}
.menu {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
}

.menu-inner {
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 1rem 0;
  @apply grid;
  @apply grid-cols-12;

  a {
    @apply text-darkColor;
    @apply font-medium;
  }

  @screen md {
    padding: 1rem;
  }
}

.white-background {
  background: #fff !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.menu_logo {
  display: flex;
  align-items: center;
  // padding-left: 1.5rem;

  @apply col-span-2;

  @screen md {
    @apply col-span-4;
  }
  @screen sm {
    @apply col-span-6;
  }
}

.menu_main {
  display: flex;
  align-items: center;
  @apply col-span-8;

  @screen md {
    @apply col-span-4;
  }

  @screen sm {
    @apply col-span-6;
  }
}

.menu_icon > svg {
  @apply font-semibold;
  @apply text-accentPink;
  display: none;

  @screen md {
    display: block;
  }
}

.menu_main > div {
  width: 100%;
  display: flex;

  @screen md {
    justify-content: center;
  }

  @screen sm {
    justify-content: flex-end;
  }
}

.menu_links {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  li {
    padding: 0.5rem 0;
    margin: 1rem;
  }

  a:hover {
    @apply text-accentPink;
  }

  @screen md {
    display: none;
  }
}

.menu_call {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply col-span-2;

  > a {
    @apply inline-block;
    @apply p-3;
    @apply font-medium;
    border-radius: 8px;
    width: 140px;
    text-align: center;
    font-size: 14px;
    background: #fff;
    color: var(--acc-purple-color);
    border: 2px solid var(--acc-purple-color);

    &:hover {
      background: var(--acc-pink-color);
      border: 2px solid transparent;
      color: #fff;
    }
  }

  @screen md {
    @apply col-span-4;
  }

  @screen sm {
    display: none;
  }
}

.menu_popup-wrapper {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
}
.menu_popup {
  position: fixed;
  z-index: 990;
  top: 130px;
  left: 1rem;
  right: 1rem;
  width: auto;
  background: var(--acc-purple-color);
  border-radius: 8px;
  padding: 1rem 1rem;
  list-style: none;

  li {
    padding: 0.5rem 0;
  }

  a {
    padding: 1rem 0;
    color: white;
    @apply font-medium;
  }
}
</style>
