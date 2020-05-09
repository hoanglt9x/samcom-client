<template>
  <div class="thumb">
    <!-- swiper1 -->
    <swiper
      ref="swiperTop"
      class="swiper gallery-top"
      :options="swiperOptionTop"
    >
      <swiper-slide
        v-for="item in 10"
        :key="item"
        :style="{ 'background-image': 'url(/images/Banner/' + item + '.jpg)' }"
      ></swiper-slide>
      <!-- <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide> -->
      <!-- <div
        slot="button-next"
        class="swiper-button-next swiper-button-white"
      ></div>
      <div
        slot="button-prev"
        class="swiper-button-prev swiper-button-white"
      ></div> -->
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper
      ref="swiperThumbs"
      class="swiper gallery-thumbs"
      :options="swiperOptionThumbs"
    >
      <swiper-slide
        v-for="item in 10"
        :key="item"
        :style="{ 'background-image': 'url(/images/Banner/' + item + '.jpg)' }"
      ></swiper-slide>
      <!-- <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide> -->
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        autoplay: {
          delay: 5000
        },
        loopedSlides: 5,
        spaceBetween: 10
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style scoped>
.thumb {
  height: 520px;
  background-color: black;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
}

.swiper-slide {
  background-size: cover;
  background-position: center;
  border-radius: 15px;
}
.swiper-slide-active {
  border-radius: 15px;
}
.gallery-top {
  height: 80%;
  width: 100%;
}
.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 5px 0;
}
.gallery-thumbs .swiper-slide {
  width: 15%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
  z-index: 50;
  border: 2px solid red;
  box-shadow: 0 10px 16px 0 rgba(201, 204, 11, 0.2);
}
</style>
