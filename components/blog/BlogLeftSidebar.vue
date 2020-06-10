<template>
  <main class="site-main">
    <!-- Slide trai -->
    <div class="frontpage-cat-posts">
      <!-- <div class="row">
        <div class="col-12">
          <div class="section-header">
            <h2 class="section-title">Chủ đề</h2>
          </div>
        </div>
      </div> -->
      <div class="col-12">
        <component-arcticle-item
          v-for="item in baiViet"
          :key="item.Slug"
          :bai-viet="item"
        >
        </component-arcticle-item>
      </div>
    </div>
  </main>
</template>

<script>
import componentArcticleItem from '~/components/blog/ArcticleItem.vue'
export default {
  components: {
    componentArcticleItem
  },
  props: {
    baiViet: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>
.site-main {
  margin-bottom: 15px;
}
</style>
