<template>
  <section class="blog_area section-padding">
    <br />
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <component-left-sidebar :bai-viet="articles[0]" />
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
import componentLeftSidebar from '~/components/blog/BlogLeftDetail.vue'
import articleQuery from '~/apollo/queries/arcticle/arcticle.gql'
export default {
  layout: 'infomation',
  components: {
    componentRightSidebar,
    componentLeftSidebar
  },
  async asyncData(context) {
    const data = await context.app.apolloProvider.defaultClient.query({
      query: articleQuery,
      variables: { tenbai: context.route.params.slug }
    })
    return data.data
  },
  head() {
    return {
      title: this.$t('links.News.name') + '-' + this.articles[0].title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'keyword',
          name: 'keyword',
          content: this.$t('links.News.name') + '-' + this.articles[0].title
        },
        {
          hid: 'title',
          name: 'title',
          content: this.$t('links.News.name') + ' - ' + this.articles[0].title
        }
      ]
    }
  }
  // apollo: {
  //   articles: {
  //     prefetch: true,
  //     query: articleQuery,
  //     variables() {
  //       return { tenbai: this.$route.params.slug }
  //     }
  //   }
  // }
}
</script>

<style scoped></style>
