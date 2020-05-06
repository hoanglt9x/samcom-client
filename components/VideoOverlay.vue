<template>
  <div class="Intro">
    <b-overlay variant="dark" opacity="0.5">
      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
        poster="/images/Banner.jpg"
      >
        <source src="/video/Background.mp4" type="video/mp4" />
      </video>
    </b-overlay>
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
  /* min-width: 100%;
  min-height: 100vh;   */
  width: 100%;
  height: 100vh;
  object-fit: fill;
}
</style>
