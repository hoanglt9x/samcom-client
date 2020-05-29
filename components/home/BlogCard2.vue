<template>
  <div class="col-lg-4 col-md-6">
    <article class="post hentry post-list post-list-small">
      <div class="entry-thumb">
        <figure class="thumb-wrap">
          <a href="post-details.html">
            <img src="/2.jpg" alt="post" />
          </a>
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
            <a href="post-details.html"
              >Ứng dụng ảnh vệ tinh xây dựng Cơ sở dữ liệu và thành lập bản
            </a>
          </h3>
          <!--./ entry-title -->
        </div>
        <!--./ entry-content -->
        <div class="entry-meta-content">
          <div class="entry-date">
            <span>July 24, 2019 </span>
          </div>
          <!--./ entry-date -->
          <div class="entry-category">
            <a class="cat" href="#">Viễn thám</a>
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
export default {}
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
</style>
