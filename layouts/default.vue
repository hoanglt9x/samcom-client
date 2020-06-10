<template>
  <div>
    <component-navbar />
    <!-- <component-header /> -->
    <component-video-overlay />
    <nuxt keep-alive />
    <component-footer />
    <component-backtop />
  </div>
</template>

<script>
import componentNavbar from '~/components/Navbar.vue'
import componentVideoOverlay from '~/components/VideoOverlay.vue'
// import componentHeader from '~/components/Header.vue'
import componentFooter from '~/components/Footer.vue'
import componentBacktop from '~/components/BackTop.vue'
export default {
  components: {
    // componentHeader,
    componentNavbar,
    componentFooter,
    componentBacktop,
    componentVideoOverlay
  }
}
</script>

<style scoped></style>
