<template>
  <div>
    <b-card
      overlay
      :img-src="$store.state.anhInfo"
      :img-alt="altImage"
      text-variant="white"
      :title="title"
    >
      <b-card-text>
        {{ subtitle }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    altImage: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
img {
  height: 70vh;
  background-size: cover;
}
</style>
