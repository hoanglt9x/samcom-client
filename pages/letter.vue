<template>
  <div>
    Day la trang anh
  </div>
</template>

<script>
export default {
  layout: 'infomation',
  head() {
    return {
      title: this.$t('links.about.open-letter') + '-' + this.$t('company.name'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'Samcom - Viễn thám - Hệ thống thông tin địa lý - Định vị'
        },
        {
          hid: 'title',
          name: 'title',
          content:
            this.$t('links.about.open-letter') + ' - ' + this.$t('company.name')
        }
      ]
    }
  }
}
</script>

<style scoped></style>
