<template>
  <div class="col-lg-4 col-md-6">
    <article class="post hentry post-grid">
      <div class="entry-thumb">
        <figure class="thumb-wrap">
          <nuxt-link :to="`/blog/${baiViet.Slug}`">
            <img :src="api_url + baiViet.image.url" :alt="baiViet.Slug" />
          </nuxt-link>
        </figure>
      </div>
      <div class="content-entry-wrap">
        <div class="entry-content">
          <h3 class="entry-title">
            <nuxt-link :to="`/blog/${baiViet.Slug}`">
              {{ baiViet.title }}
            </nuxt-link>
          </h3>
        </div>
        <div class="entry-meta-content">
          <div class="entry-meta-author">
            <div class="entry-author-thumb">
              <img
                class="avatar photo"
                :src="api_url + baiViet.authors[0].image.url"
                :alt="baiViet.authors[0].name"
              />
            </div>
            <div class="entry-author-name">
              <nuxt-link :to="`/authors/${baiViet.authors[0].id}`">
                {{ baiViet.authors[0].name }}
              </nuxt-link>
            </div>
          </div>
          <div class="entry-date">
            <span>{{ GetFormattedDate(baiViet.created_at) }}</span>
          </div>
          <div class="entry-category">
            <nuxt-link class="cat" :to="`/categories/${baiViet.category.Slug}`">
              {{ baiViet.category.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
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
  height: 370px;
}
.entry-title {
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
/* .post {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding: 5px;
} */
</style>
