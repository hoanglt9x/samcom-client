<template>
  <div class="col-lg-4 col-md-6">
    <article class="post hentry post-list post-list-small">
      <div class="entry-thumb">
        <figure class="thumb-wrap">
          <nuxt-link :to="`/blog/${baiViet.Slug}`">
            <img :src="api_url + baiViet.image.url" :alt="baiViet.Slug" />
          </nuxt-link>
          <!-- <div class="featured-badge-list">
            <a class="featured" href="#">
              <span class="fa fa-bolt"></span>
            </a>
          </div> -->
          <!--./ featured-badge-list -->
        </figure>
        <!--./ thumb-wrap -->
      </div>
      <!--./ entry-thumb -->
      <div class="content-entry-wrap">
        <div class="entry-content">
          <h3 class="entry-title">
            <nuxt-link :to="`/blog/${baiViet.Slug}`">
              {{ baiViet.title }}
            </nuxt-link>
          </h3>
          <!--./ entry-title -->
        </div>
        <!--./ entry-content -->
        <div class="entry-meta-content">
          <div class="entry-date">
            <span>{{ GetFormattedDate(baiViet.created_at) }}</span>
          </div>
          <!--./ entry-date -->
          <div class="entry-category">
            <nuxt-link class="cat" :to="`/categories/${baiViet.category.Slug}`">
              {{ baiViet.category.name }}
            </nuxt-link>
          </div>
          <!--./ entry-category -->
        </div>
        <!--./ entry-meta-content -->
      </div>
      <!--./ content-entry-wrap -->
    </article>
  </div>
</template>

<script>
export default {
  props: {
    baiViet: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri
    }
  },
  methods: {
    GetFormattedDate(todayTime) {
      const thoigian = new Date(todayTime)
      const month = thoigian.getMonth() + 1
      const day = thoigian.getDate()
      const year = thoigian.getFullYear()
      return day + '/' + month + '/' + year
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100px;
}
.entry-title {
  padding-top: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.cat {
  font-weight: bold;
  /* color: #fa563a; */
}
</style>
