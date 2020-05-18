<template>
  <section id="portfolio">
    <div class="container">
      <header class="section-header">
        <h3 class="section-title">{{ $t('media.title') }}</h3>
      </header>
      <div class="row">
        <div class="col-lg-12">
          <ul id="portfolio-flters">
            <li class="filter-active" @click="changActive('Anh')">
              {{ $t('media.image') }}
            </li>
            <li @click="changActive('Video')">{{ $t('media.video') }}</li>
          </ul>
        </div>
      </div>
      <hr />
      <component-galaxy-image v-if="isVideo === 'Anh'" />
      <componet-galaxy-video v-else />
      <!-- <div class="row portfolio-container">
        <component-galaxy-image />
      </div> -->
    </div>
  </section>
</template>

<script>
import componentGalaxyImage from '~/components/home/GalaxyImage.vue'
import componetGalaxyVideo from '~/components/home/GalaxyVideo.vue'
export default {
  components: {
    componentGalaxyImage,
    componetGalaxyVideo
  },
  data() {
    return {
      isVideo: 'Anh'
    }
  },
  methods: {
    // changeActive(value) {
    //   // eslint-disable-next-line no-undef
    //   isVideo = value
    // }
  }
}
</script>

<style scoped>
#portfolio {
  padding: 20px 0;
}

#portfolio #portfolio-flters {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}

#portfolio #portfolio-flters li {
  cursor: pointer;
  margin: 15px 15px 15px 0;
  display: inline-block;
  padding: 6px 10px;
  font-size: 16px;
  line-height: 20px;
  color: #413e66;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

#portfolio #portfolio-flters li:hover,
#portfolio #portfolio-flters li.filter-active {
  color: #1bb1dc;
}

#portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

#portfolio .portfolio-item {
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
}

#portfolio .portfolio-item .portfolio-wrap {
  overflow: hidden;
  position: relative;
  margin: 0;
}

#portfolio .portfolio-item .portfolio-wrap:hover img {
  opacity: 0.4;
  transition: 0.3s;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
  opacity: 0;
  transition: 0.2s linear;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info h4 {
  font-size: 22px;
  line-height: 1px;
  font-weight: 700;
  margin-bottom: 14px;
  padding-bottom: 0;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info h4 a {
  color: #fff;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info h4 a:hover {
  color: #1bb1dc;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info p {
  padding: 0;
  margin: 0;
  color: #f8fcff;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-preview,
#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-details {
  display: inline-block;
  line-height: 1;
  text-align: center;
  width: 36px;
  height: 36px;
  background: #1bb1dc;
  border-radius: 50%;
  margin: 10px 4px 0 4px;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-preview i,
#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-details i {
  padding-top: 6px;
  font-size: 22px;
  color: #fff;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-preview:hover,
#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-details:hover {
  background: #42c3e8;
}

#portfolio
  .portfolio-item
  .portfolio-wrap
  .portfolio-info
  .link-preview:hover
  i,
#portfolio
  .portfolio-item
  .portfolio-wrap
  .portfolio-info
  .link-details:hover
  i {
  color: #fff;
}

#portfolio .portfolio-item .portfolio-wrap:hover {
  background: #282646;
}

#portfolio .portfolio-item .portfolio-wrap:hover .portfolio-info {
  opacity: 1;
}
</style>
