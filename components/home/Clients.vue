<template>
  <section id="clients" class="section-bg">
    <div class="container">
      <header class="section-header">
        <h3>ĐỐI TÁC</h3>
        <hr />
      </header>

      <no-ssr>
        <carousel :autoplay="true" :items="5" :autoplay-speed="200">
          <img
            v-for="item in 18"
            :key="item"
            :src="'/images/DoiTac/' + item + '.jpg'"
            :alt="item"
          />
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
#clients {
  padding: 60px 0;
}

#clients img {
  max-width: 80%;
  opacity: 1;
  transition: 0.3s;
  padding: 15px 0;
}

#clients img:hover {
  opacity: 1;
}

#clients .owl-nav,
#clients .owl-dots {
  margin-top: 5px;
  text-align: center;
}

#clients .owl-dot {
  display: inline-block;
  margin: 0 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
}

#clients .owl-dot.active {
  background-color: #1bb1dc;
}
</style>
