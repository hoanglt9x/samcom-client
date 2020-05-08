<template>
  <div class="col-md-6 col-lg-4 ">
    <div class="box" :style="{ 'background-image': 'url(' + anhNen + ')' }">
      <div class="overlay2">
        <h4 class="title2">
          {{ tieuDe }}
        </h4>
      </div>

      <div class="overlay">
        <h4 class="title">
          <nuxt-link :to="link">{{ tieuDe }}</nuxt-link>
        </h4>
        <p class="description">
          {{ moTa }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tieuDe: {
      type: String,
      default: ''
    },
    moTa: {
      type: String,
      default: ''
    },
    anhNen: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
#services .box {
  padding: 30px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin: 0 10px 30px 10px;
  background: black;
  box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;
  background-size: cover;
  height: 240px;
}

#services .box:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

#services .icon {
  margin: 0 auto 15px auto;
  padding-top: 12px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

#services .icon i {
  font-size: 36px;
  line-height: 1;
}

#services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

#services .title a {
  color: yellow;
  font-weight: 700;
}

/* #services .box:hover .title a {
  color: yellow;
  font-weight: 700;
} */

#services .box .overlay {
  /* height: 240px; */
  visibility: hidden;
  border-radius: 10px;
  height: 240px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

#services .overlay2 {
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 16px;
  border-radius: 0 0 5px 5px !important;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 10px 10px 10px;
}

#services .overlay2 .title2 {
  /* height: 240px; */
  font-size: 14px;
  color: yellow;
  font-weight: bold;
  margin: 0;
}

#services .box:hover .overlay2 {
  visibility: hidden;
}

#services .box:hover .overlay {
  /* -webkit-transform: scale(1.2);
  transform: scale(1.2); */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: visible;
  background-color: rgba(0, 0, 0, 0.8);
  background-size: cover;
}

#services .description {
  font-size: 14px;
  line-height: 28px;
  margin-bottom: 0;
  text-align: left;
  color: white;
  line-height: normal;
  font-weight: 600;
  text-indent: 20px;
}
</style>
