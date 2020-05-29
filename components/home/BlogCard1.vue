<template>
  <div class="col-lg-4 col-md-6">
    <article class="post hentry post-grid">
      <div class="entry-thumb">
        <figure class="thumb-wrap">
          <a href="/">
            <img src="/1.jpg" alt="Anh" />
          </a>
        </figure>
      </div>
      <div class="content-entry-wrap">
        <div class="entry-content">
          <h3 class="entry-title">
            <a href="/"
              >Đột phá trong đo vẽ địa hình - những bước tiến mới của Công ty
              TNHH MTV Trắc Địa Bản Đồ</a
            >
          </h3>
        </div>
        <div class="entry-meta-content">
          <div class="entry-meta-author">
            <div class="entry-author-thumb">
              <img
                class="avatar photo"
                src="/images/Team/Dinh.jpg"
                alt="Nguyen An Dinh"
              />
            </div>
            <div class="entry-author-name">
              <a href="/">Nguyễn An Định</a>
            </div>
          </div>
          <div class="entry-date">
            <span>26/05/2020</span>
          </div>
          <div class="entry-category">
            <a class="cat" href="#">Viễn thám</a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {}
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
</style>
