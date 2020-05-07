<template>
  <main id="main">
    <component-Intro />
    <component-contact />
  </main>
</template>

<script>
import componentContact from '~/components/home/Contact.vue'
import componentIntro from '~/components/home/Intro.vue'
export default {
  components: {
    componentContact,
    componentIntro
  },
  head() {
    return {
      title: this.$t('links.home') + '-' + this.$t('company.name'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'Viễn thám - Hệ thống thông tin địa lý - Định vị'
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Trang chủ - Công ty TNHH MTV Trắc địa Bản đồ'
        }
      ]
    }
  }
}
</script>
<style scoped></style>
