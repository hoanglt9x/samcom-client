<template>
  <main class="site-main">
    <div class="post single-post single-post-two">
      <div class="post-header single-post-header">
        <div class="content-entry-wrap">
          <h3 v-if="baiViet.title" class="entry-title">
            {{ baiViet.title.toUpperCase() }}
          </h3>
          <!--./ entry-title -->
          <div class="entry-meta-content">
            <div class="entry-meta-author">
              <div class="entry-author-thumb">
                <img
                  v-if="baiViet.authors[0].image.url"
                  class="avatar photo"
                  :src="api_url + baiViet.authors[0].image.url"
                  :alt="baiViet.authors[0].name"
                />
              </div>
              <div class="entry-author-name">
                <a v-if="baiViet.authors[0].name" href="#">
                  {{ baiViet.authors[0].name }}
                </a>
              </div>
            </div>
            <!--./ entry-meta-author -->
            <div class="entry-date">
              <span v-if="baiViet.created_at">{{
                GetFormattedDate(baiViet.created_at)
              }}</span>
            </div>
            <!--./ entry-date -->
            <!-- <div class="entry-views">
              <span>3 Min Read</span>
            </div> -->
            <!--./ entry-date -->
            <div class="entry-category">
              <nuxt-link
                class="cat"
                :to="`/categories/${baiViet.category.Slug}`"
                >{{ baiViet.category.name }}</nuxt-link
              >
            </div>
            <!--./ entry-category -->
            <!-- <div class="entry-comment">
              <span>64 Comments</span>
            </div> -->
            <!--./ entry-comment -->
          </div>
          <!--./ entry-meta-content -->
        </div>
        <!--./ content-entry-wrap -->
      </div>
      <div class="single-post-content">
        <!-- <div class="post-share-area">
          <h3>221<span>SHARES</span></h3>
          <div class="share">
            <a class="facebook" href="#">
              <span class="fa fa-facebook"></span>
              <span class="text">SHARE POST</span>
            </a>
            <a class="twitter" href="#">
              <span class="fa fa-twitter"></span>
              <span class="text">TWEET POST</span>
            </a>
            <a class="google" href="#">
              <span class="fa fa-google-plus"></span>
              <span class="text">SHARE POST</span>
            </a>
          </div>
        </div> -->
        <figure class="thumb text-center">
          <img
            v-if="baiViet.image.url"
            :src="api_url + baiViet.image.url"
            :alt="baiViet.title"
          />
        </figure>
        <div
          v-if="baiViet.content"
          class="entry-content"
          v-html="$md.render(baiViet.content)"
        ></div>
        <!-- <markdown-it-vue class="entry-content" :content="baiViet.content" /> -->
        <!-- <div
          v-if="baiViet.content"
          class="entry-content"
          id="noiDungBaiViet"
          v-html="baiViet.content"
        ></div> -->
        <!--entry content-->
        <!-- <div class="entry-footer mt-60">
          <div class="entry-tag">
            <a href="#" rel="tag">World</a>
            <a href="#" rel="tag">Technology</a>
            <a href="#" rel="tag">fun</a>
            <a href="#" rel="tag">fashion</a>
            <a href="#" rel="tag">lifestyle</a>
            <a href="#" rel="tag">entrepreneurship</a>
          </div>
        </div> class="entry-content" -->
      </div>
    </div>
  </main>
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
.site-main {
  margin-bottom: 15px;
  padding-left: 20px;
  padding-right: 15px;
}
.post.single-post.single-post-two .post-header.single-post-header {
  margin-bottom: 5px;
}
.post.single-post figure {
  padding: 10px 0;
}
.cat {
  font-weight: bold;
}
.post-header.single-post-header .entry-title {
  font-size: 26px;
}
</style>
