<template>
  <div class="col-md-6 col-lg-3 col-sm-12">
    <b-card
      :img-src="anhNen"
      img-alt="Anh nen"
      img-top
      tag="article"
      class="mb-2"
      style="height: 350px; padding-bottom: 15px;"
    >
      <b-card-text>
        {{ moTa }}
      </b-card-text>
    </b-card>
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
img {
  height: 60%;
}
article {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 15px;
}
.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  font-weight: 600;
}
</style>
