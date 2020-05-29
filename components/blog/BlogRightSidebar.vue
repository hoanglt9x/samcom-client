<template>
  <div class="blog_right_sidebar">
    <component-search />
    <component-category />
    <component-recent-post />
  </div>
</template>

<script>
import componentSearch from '~/components/blog/Search.vue'
import componentCategory from '~/components/blog/Category.vue'
import componentRecentPost from '~/components/blog/RecentPost.vue'
export default {
  components: {
    componentSearch,
    componentCategory,
    componentRecentPost
  }
}
</script>

<style scoped></style>
