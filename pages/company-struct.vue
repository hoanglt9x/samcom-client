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
import gql from 'graphql-tag'
import componentRightSidebar from '~/components/blog/BlogRightSidebar.vue'
import componentLeftSidebar from '~/components/blog/BlogLeftSidebar.vue'
// import articlesQuery from '~/apollo/queries/article/articles'
export default {
  layout: 'infomation',
  components: {
    componentRightSidebar,
    componentLeftSidebar
  },
  async asyncData(context) {
    const data = await context.app.apolloProvider.defaultClient.query({
      query: gql`
        query ArcticleCompany {
          articles(
            where: {
              Display: true
              mota_ne: ""
              id_in: [36, 35, 34, 33, 32, 31, 30]
            }
          ) {
            title
            Slug
            mota
            image {
              url
            }
            authors {
              id
              name
              image {
                url
              }
            }
            created_at
            category {
              name
              Slug
            }
          }
        }
      `
    })
    return data.data
  },
  head() {
    return {
      title:
        this.$t('links.about.companyStruct') + '-' + this.$t('company.name'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'Samcom - Viễn thám - Hệ thống thông tin địa lý - Định vị'
        },
        {
          hid: 'title',
          name: 'title',
          content:
            this.$t('links.about.companyStruct') +
            ' - ' +
            this.$t('company.name')
        }
      ]
    }
  }
}
</script>

<style scoped></style>
