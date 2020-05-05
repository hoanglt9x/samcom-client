<template>
  <div id="carouselId" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselId" data-slide-to="0" class="active"></li>
      <li data-target="#carouselId" data-slide-to="1"></li>
      <li data-target="#carouselId" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img
          data-src="holder.js/900x500/auto/#777:#555/text:First slide"
          alt="First slide"
        />
        <div class="carousel-caption d-none d-md-block">
          <h3>Title</h3>
          <p>Description</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          data-src="holder.js/900x500/auto/#666:#444/text:Second slide"
          alt="Second slide"
        />
        <div class="carousel-caption d-none d-md-block">
          <h3>Title</h3>
          <p>Description</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          data-src="holder.js/900x500/auto/#666:#444/text:Third slide"
          alt="Third slide"
        />
        <div class="carousel-caption d-none d-md-block">
          <h3>Title</h3>
          <p>Description</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselId"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselId"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Trang chủ - Samcom',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'Viễn thám - Hệ thống thông tin địa lý - Định vị'
        },
        {
          hid: 'service',
          name: 'service',
          content:
            'Đo đạc - Bay chụp ảnh hàng không - Cơ sở dữ liệu - Lập trình phần mềm GIS'
        },
        {
          hid: 'geo.region',
          name: 'geo.region',
          content: 'VN-HN'
        },
        {
          hid: 'geo.position',
          name: 'geo.position',
          content: '21.050, 105.785'
        },
        {
          hid: 'ICBM',
          name: 'ICBM',
          content: '21.050, 105.785'
        }
      ]
    }
  },
  scrollToTop: true
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
