<template>
  <section class="blog_area section-padding">
    <br />
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <component-left-sidebar :bai-viet="articles"></component-left-sidebar>
        </div>
        <div class="col-lg-3">
          <component-right-sidebar />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import gql from 'graphql-tag'
import componentRightSidebar from '~/components/blog/BlogRightSidebar.vue'
import componentLeftSidebar from '~/components/blog/BlogLeftSidebar.vue'
import articlesQuery from '~/apollo/queries/arcticle/articles.gql'
export default {
  layout: 'infomation',
  components: {
    componentRightSidebar,
    componentLeftSidebar
  },
  async asyncData(context) {
    const data = await context.app.apolloProvider.defaultClient.query({
      query: articlesQuery
    })
    return data.data
  },
  head() {
    return {
      title: this.$t('links.News.name') + '-' + this.$t('company.name'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'keyword',
          name: 'keyword',
          content: this.$t('links.News.name') + '-' + this.$t('company.name')
        },
        {
          hid: 'title',
          name: 'title',
          content: this.$t('links.News.name') + ' - ' + this.$t('company.name')
        }
      ]
    }
  }
}
</script>

<style scoped></style>
