<template>
  <section id="blogpost" class="section-bg">
    <div class="container">
      <header class="section-header">
        <h3>{{ $t('links.News.name').toUpperCase() }}</h3>
        <hr />
      </header>
      <div class="row">
        <div class="col-12">
          <div class="row">
            <component-blog-card />
            <component-blog-card />
            <component-blog-card />
          </div>
          <div class="row">
            <component-blog-card-small />
            <component-blog-card-small />
            <component-blog-card-small />
            <component-blog-card-small />
            <component-blog-card-small />
            <component-blog-card-small />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import componentBlogCard from '~/components/home/BlogCard1.vue'
import componentBlogCardSmall from '~/components/home/BlogCard2.vue'
export default {
  components: {
    componentBlogCard,
    componentBlogCardSmall
  }
}
</script>

<style>
#blogpost {
  padding: 60px 0 40px 0;
}
/*===================================
  # Typography
====================================== */
</style>
