<template>
  <article class="post side-post">
    <div class="thumb-wrap">
      <nuxt-link :to="`/blog/${baiVietMoi.Slug}`">
        <img :src="api_url + baiVietMoi.image.url" :alt="baiVietMoi.Slug" />
      </nuxt-link>
      <!-- <a href="post-details.html">
      </a> -->
    </div>
    <!--./ thumb-wrap -->
    <div class="content-entry-wrap">
      <h3 class="entry-title">
        <nuxt-link :to="`/blog/${baiVietMoi.Slug}`">
          {{ baiVietMoi.title.toUpperCase() }}
        </nuxt-link>
      </h3>
      <!--./ entry-title -->
      <div class="entry-meta-content">
        <div class="entry-date">
          <span>{{ GetFormattedDate(baiVietMoi.created_at) }} </span>
        </div>
        <!--./ entry-date -->
      </div>
      <!--./ entry-meta-content -->
    </div>
  </article>
  <!--./ end post -->
</template>

<script>
export default {
  props: {
    baiVietMoi: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri
    }
  },
  computed: {
    duongDan() {
      return '/blog/' + this.baiVietMoi.Slug
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
  max-width: 100px;
  height: 90px;
  vertical-align: middle;
}
.widget .post.side-post .entry-title {
  margin-bottom: 5px;
  padding-top: 5px;
}
.entry-title {
  padding: 0;
  margin-bottom: 5px;
}
a {
  font-size: 13px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
a:hover {
  color: #09558a;
}
.entry-date span {
  color: blue;
  font-weight: 600;
}
</style>
