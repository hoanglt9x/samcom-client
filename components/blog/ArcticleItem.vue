<template>
  <article class="post hentry post-list">
    <div class="entry-thumb">
      <figure class="thumb-wrap">
        <nuxt-link :to="`/blog/${baiViet.Slug}`">
          <img :src="api_url + baiViet.image.url" :alt="baiViet.Slug" />
        </nuxt-link>
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
        <!--./ entry-meta-author -->
        <div class="entry-date">
          <span>{{ GetFormattedDate(baiViet.created_at) }}</span>
        </div>
        <!--./ entry-date -->
        <!-- <div class="entry-views">
          <span>3 Min Read</span>
        </div> -->
        <!--./ entry-date -->
        <div class="entry-category">
          <nuxt-link class="cat" :to="`/categories/${baiViet.category.Slug}`">
            {{ baiViet.category.name }}
          </nuxt-link>
        </div>
        <!--./ entry-category -->
      </div>
      <!--./ entry-meta-content -->
      <div class="entry-summary">
        <p>
          {{ baiViet.mota }}
        </p>
      </div>
    </div>
    <!--./ content-entry-wrap -->
  </article>
</template>

<script>
export default {
  props: {
    baiViet: {
      type: Object,
      default: null
    }
    // },
    // titlePost: {
    //   type: String,
    //   default: ''
    // },
    // imgPost: {
    //   type: String,
    //   default: ''
    // },
    // authorPost: {
    //   type: String,
    //   default: ''
    // },
    // authorImage: {
    //   type: String,
    //   default: ''
    // },
    // categoryPost: {
    //   type: String,
    //   default: ''
    // },
    // descriptionPost: {
    //   type: String,
    //   default: ''
    // }
    // createTime: {
    //   type: Date,
    //   default: new Date()
    // }
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
.entry-title {
  padding-top: 5px;
}
.entry-title a {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
img {
  width: 100%;
  height: 200px;
}
a:hover {
  color: #09558a;
}
.cat {
  font-weight: bold;
}
p {
  font-size: 15px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
</style>
