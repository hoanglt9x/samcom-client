<template>
  <div class="Intro">
    <!-- <b-overlay variant="dark"> -->
    <video
      playsInline="playsinline"
      autoPlay="autoplay"
      muted="muted"
      loop="loop"
      poster="/images/Banner.jpg"
    >
      <source src="/video/Background.mp4" type="video/mp4" />
    </video>
    <div class="title">
      <p>{{ $t('company.p1') }}</p>
      <p>{{ $t('company.p2') }}</p>
      <p class="sologan">{{ $t('company.sologan') }}</p>
      <b-button variant="primary">{{ $t('links.service') }}</b-button>
    </div>
    <!-- </b-overlay> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.Intro {
  width: 100vw;
  height: 100vh;
  background: black;
  background-size: cover;
}
video {
  position: absolute;
  background-image: url('/images/Banner.jpg');
  opacity: 0.5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: fill;
  z-index: 0;
}
p {
  margin: 0;
}
.title {
  color: white !important;
  font-weight: 700;
  font-size: 32px;
  padding-top: 35vh;
  /* padding-left: 25%; */
  text-align: center;
}
.sologan {
  color: yellow;
  font-weight: 700;
  font-size: 20px;
}
</style>
