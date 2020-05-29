<template>
  <article class="post hentry post-list">
    <div class="entry-thumb">
      <figure class="thumb-wrap">
        <a href="#">
          <img src="/3.jpg" alt="post" />
        </a>
      </figure>
      <!--./ thumb-wrap -->
    </div>
    <!--./ entry-thumb -->
    <div class="content-entry-wrap">
      <div class="entry-content">
        <h3 class="entry-title">
          <a href="post-details.html"
            >Ứng dụng ảnh vệ tinh xây dựng Cơ sở dữ liệu và thành lập bản đồ
          </a>
        </h3>
        <!--./ entry-title -->
      </div>
      <!--./ entry-content -->
      <div class="entry-meta-content">
        <div class="entry-meta-author">
          <div class="entry-author-thumb">
            <img
              class="avatar photo"
              src="/images/Team/Dinh.jpg"
              alt="author"
            />
          </div>
          <div class="entry-author-name">
            <a href="#">Nguyễn An Định</a>
          </div>
        </div>
        <!--./ entry-meta-author -->
        <div class="entry-date">
          <span>27/05/2020</span>
        </div>
        <!--./ entry-date -->
        <!-- <div class="entry-views">
          <span>3 Min Read</span>
        </div> -->
        <!--./ entry-date -->
        <div class="entry-category">
          <a class="cat" href="#">Viễn thám</a>
        </div>
        <!--./ entry-category -->
      </div>
      <!--./ entry-meta-content -->
      <div class="entry-summary">
        <p>
          Từ những năm 80 của thế kỷ trước, Công ty TNHH MTV Trắc địa Bản đồ/Cục
          Bản đồ đã được tiếp cận với ảnh viễn thám vệ tinh quang học và nhận
          thấy đây là một nguồn tư liệu có khả năng ứng dụng rất cao cho ngành
          trắc địa bản đồ. Từ đó, Công ty đã chủ động nghiên cứu và khai thác sử
          dụng có hiệu quả các loại tư liệu ảnh vệ tinh trong công tác xây dựng
          CSDL và thành lập bản đồ.
        </p>
      </div>
    </div>
    <!--./ content-entry-wrap -->
  </article>
</template>

<script>
export default {
  props: {
    titlePost: {
      type: String,
      default: ''
    },
    imgPost: {
      type: String,
      default: ''
    },
    authorPost: {
      type: String,
      default: ''
    },
    authorImage: {
      type: String,
      default: ''
    },
    categoryPost: {
      type: String,
      default: ''
    },
    descriptionPost: {
      type: String,
      default: ''
    }
    // createTime: {
    //   type: Date,
    //   default: new Date()
    // }
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
