<template>
  <div>
    <a id="backtop" @click="scrollToTop"
      ><b-icon
        v-b-tooltip.hover.left="'Đầu trang'"
        icon="chevron-double-up"
        class="rounded-circle bg-info p-2 back-to-top"
        variant="light"
      ></b-icon
    ></a>
    <a href="tel:+842437558003" class="back-to-top2">
      <b-icon
        v-b-tooltip.hover.left="'Gọi điện'"
        icon="phone"
        class="rounded-circle bg-warning p-2 back-to-top2"
        variant="light"
      ></b-icon>
    </a>
    <!-- <nuxt-link to="/"
      ><b-icon
        icon="phone"
        class="rounded-circle bg-info p-2 back-to-top3"
        variant="light"
      ></b-icon
    ></nuxt-link> -->
    <!-- <a href="/" class="back-to-top3"><i class="fa fa-comment"/></a> -->
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  background: #1bb1dc;
  color: #fff;
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 1;
  font-size: 16px;
  border-radius: 50%;
  right: 5px;
  bottom: 15px;
  transition: background 0.5s;
  z-index: 11;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.back-to-top2 {
  position: fixed;
  background: #1bb1dc;
  color: #fff;
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 1;
  font-size: 16px;
  border-radius: 50%;
  right: 5px;
  bottom: 62px;
  transition: background 0.5s;
  z-index: 11;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.back-to-top2 i {
  padding-top: 12px;
  font-size: 20px;
  color: #fff;
}

.back-to-top3 {
  position: fixed;
  background: #1bb1dc;
  color: #fff;
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 1;
  font-size: 16px;
  border-radius: 50%;
  right: 5px;
  bottom: 107px;
  transition: background 0.5s;
  z-index: 11;
}

.back-to-top3 i {
  padding-top: 12px;
  font-size: 20px;
  color: #fff;
}

.back-to-top i {
  padding-top: 12px;
  color: #fff;
}
</style>
