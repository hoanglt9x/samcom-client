<template>
  <section id="projects">
    <div class="container">
      <header class="section-header">
        <h3>{{ $t('links.Project').toUpperCase() }}</h3>
        <hr />
      </header>
      <div class="row">
        <component-card-project
          v-for="item in articles"
          :key="item.id"
          :anh-nen="api_url + item.image.url"
          :tieu-de="item.title"
          :mo-ta="item.title"
          :link="item.Slug"
        >
        </component-card-project>
      </div>
    </div>
  </section>
</template>

<script>
import componentCardProject from '~/components/home/CardProject.vue'
import arcticleProjectQuery from '~/apollo/queries/arcticle/ArticleProject.gql'
export default {
  components: {
    componentCardProject
  },
  data() {
    return {
      articles: [],
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: arcticleProjectQuery
    }
  }
}
</script>

<style scoped>
#projects {
  padding: 60px 0 40px 0;
}
</style>
