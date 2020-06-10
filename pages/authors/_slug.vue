<template>
  <section class="blog_area section-padding">
    <br />
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <component-left-sidebar
            :bai-viet="author.articles"
          ></component-left-sidebar>
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
import articleAuthorsQuery from '~/apollo/queries/arcticle/ArticleAuthors.gql'
export default {
  layout: 'infomation',
  components: {
    componentRightSidebar,
    componentLeftSidebar
  },
  async asyncData(context) {
    const data = await context.app.apolloProvider.defaultClient.query({
      query: articleAuthorsQuery,
      variables: { ID: context.route.params.slug }
    })
    return data.data
  },
  head() {
    return {
      title: this.$t('links.News.name') + '-' + this.author.name,
      meta: [
        {
          hid: 'keyword',
          name: 'keyword',
          content: this.$t('links.News.name') + '-' + this.author.name
        },
        {
          hid: 'title',
          name: 'title',
          content: this.$t('links.News.name') + ' - ' + this.author.name
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
