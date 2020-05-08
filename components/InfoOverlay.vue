<template>
  <div>
    <b-card
      overlay
      img-src="https://picsum.photos/900/250/?image=3"
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

<style scoped></style>
