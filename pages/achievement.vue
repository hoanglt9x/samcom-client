<template>
  <div class="container">
    <div>
      <br />
      <h2 style="text-align: center">
        THÀNH TÍCH
      </h2>
      <hr />
      <img src="/images/struct/struct.jpg" alt="Huy chuong" />
      <!-- <img src="./SAMCOM_files/31EC8669770B650ACCC8578B80037C91.jpg" class="" /> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'infomation',
  head() {
    return {
      title:
        this.$t('links.about.companyStruct') + '-' + this.$t('company.name'),
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
            this.$t('links.about.companyStruct') +
            ' - ' +
            this.$t('company.name')
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 15px;
  padding-left: 50px;
  padding-right: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
img {
  justify-content: center;
}
</style>
