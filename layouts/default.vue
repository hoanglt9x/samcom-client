<template>
  <div>
    <component-navbar />
    <nuxt />
  </div>
</template>

<script>
import componentNavbar from '~/components/Navbar.vue'
export default {
  components: {
    componentNavbar
  }
}
</script>

<style scoped></style>
