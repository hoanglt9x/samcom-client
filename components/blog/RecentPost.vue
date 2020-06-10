<template>
  <aside class="widget popular-posts-widget">
    <h4 class="widget-title"><span>Bài viết mới</span></h4>
    <div class="widget-content">
      <component-arcticle-recent
        v-for="item in articles"
        :key="item.id"
        :bai-viet-moi="item"
      >
      </component-arcticle-recent>
    </div>
  </aside>
</template>

<script>
import componentArcticleRecent from '~/components/blog/ArcticleRecent.vue'
import arcticleRecentQuery from '~/apollo/queries/arcticle/ArcticleRecent.gql'
export default {
  components: {
    componentArcticleRecent
  },
  apollo: {
    articles: {
      prefetch: true,
      query: arcticleRecentQuery
    }
  }
}
</script>

<style scoped></style>
