<template>
  <div>
    <component-navbar />
    <component-info-overlay />
    <!-- <component-header /> -->
    <nuxt />
    <component-contact />
    <component-footer />
    <component-backtop />
  </div>
</template>

<script>
import componentNavbar from '~/components/Navbar.vue'
import componentContact from '~/components/home/Contact.vue'
import componentFooter from '~/components/Footer.vue'
import componentBacktop from '~/components/BackTop.vue'
import componentInfoOverlay from '~/components/InfoOverlay.vue'
export default {
  components: {
    // componentHeader,
    componentNavbar,
    componentInfoOverlay,
    componentFooter,
    componentBacktop,
    componentContact
  }
}
</script>

<style scoped></style>
