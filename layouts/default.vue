<template>
  <div>
    <component-navbar />
    <nuxt />
    <component-footer />
    <component-backtop />
  </div>
</template>

<script>
import componentNavbar from '~/components/Navbar.vue'
import componentFooter from '~/components/Footer.vue'
import componentBacktop from '~/components/BackTop.vue'
export default {
  components: {
    componentNavbar,
    componentFooter,
    componentBacktop
  }
}
</script>

<style scoped></style>
