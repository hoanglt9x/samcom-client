<template>
  <main id="main">
    <component-Intro />
    <component-service />
    <component-project />
    <component-blog-home />
    <component-team />
    <component-liblary />
    <component-client />
    <component-contact />
  </main>
</template>

<script>
import componentContact from '~/components/home/Contact.vue'
import componentIntro from '~/components/home/Intro.vue'
import componentService from '~/components/home/Service.vue'
import componentTeam from '~/components/home/Team.vue'
import componentClient from '~/components/home/Clients.vue'
import componentLiblary from '~/components/home/Liblary.vue'
import componentProject from '~/components/home/Project.vue'
import componentBlogHome from '~/components/home/BlogHome.vue'
export default {
  components: {
    componentContact,
    componentIntro,
    componentService,
    componentTeam,
    componentClient,
    componentLiblary,
    componentProject,
    componentBlogHome
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
