<template>
  <article class="post side-post">
    <div class="thumb-wrap">
      <a href="post-details.html">
        <img src="/3.jpg" alt="post" />
      </a>
    </div>
    <!--./ thumb-wrap -->
    <div class="content-entry-wrap">
      <h3 class="entry-title">
        <a href="post-details.html"
          >Ứng dụng ảnh vệ tinh xây dựng Cơ sở dữ liệu và thành lập bản đồ
        </a>
      </h3>
      <!--./ entry-title -->
      <div class="entry-meta-content">
        <div class="entry-date">
          <span>July 24, 2019 </span>
        </div>
        <!--./ entry-date -->
      </div>
      <!--./ entry-meta-content -->
    </div>
  </article>
  <!--./ end post -->
</template>

<script>
export default {}
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
