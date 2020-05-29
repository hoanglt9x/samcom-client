<template>
  <aside class="widget popular-posts-widget">
    <h4 class="widget-title"><span>Bài viết mới</span></h4>
    <div class="widget-content">
      <component-arcticle-recent />
      <component-arcticle-recent />
      <component-arcticle-recent />
      <component-arcticle-recent />
      <component-arcticle-recent />
    </div>
  </aside>
</template>

<script>
import componentArcticleRecent from '~/components/blog/ArcticleRecent.vue'
export default {
  components: {
    componentArcticleRecent
  }
}
</script>

<style scoped></style>
