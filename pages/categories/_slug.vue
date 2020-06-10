<template>
  <section class="blog_area section-padding">
    <br />
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <component-left-sidebar
            :bai-viet="categories[0].articles"
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
import articleCategoriesQuery from '~/apollo/queries/arcticle/ArticleCategories.gql'
export default {
  layout: 'infomation',
  components: {
    componentRightSidebar,
    componentLeftSidebar
  },
  async asyncData(context) {
    const data = await context.app.apolloProvider.defaultClient.query({
      query: articleCategoriesQuery,
      variables: { chude: context.route.params.slug }
    })
    return data.data
  },
  head() {
    return {
      title: this.$t('links.News.name') + '-' + this.categories[0].name,
      meta: [
        {
          hid: 'keyword',
          name: 'keyword',
          content: this.$t('links.News.name') + '-' + this.categories[0].name
        },
        {
          hid: 'title',
          name: 'title',
          content: this.$t('links.News.name') + ' - ' + this.categories[0].name
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
