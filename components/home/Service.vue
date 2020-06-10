<template>
  <section id="services" class="section-bg">
    <div class="container">
      <header class="section-header">
        <h3>{{ $t('service.title') }}</h3>
        <hr />
      </header>
      <div class="row">
        <component-card-service
          anh-nen="images/BayChup.jpg"
          :tieu-de="$t('service.AerialPhotography')"
          :mo-ta="$t('service.AerialPhotographyDes')"
          :link="'/blog/bay-chup-anh'"
        />
        <component-card-service
          anh-nen="images/DoDac.jpg"
          :tieu-de="$t('service.FieldSurveying')"
          :mo-ta="$t('service.FieldSurveyingDes')"
          :link="'/blog/do-dac-ngoai-nghiep'"
        />
        <component-card-service
          anh-nen="images/CoSoDuLieu.jpg"
          :tieu-de="$t('service.Database')"
          :mo-ta="$t('service.DatabaseDes')"
          :link="'/blog/xay-dung-co-so-du-lieu-nen-dia-ly'"
        />
        <component-card-service
          anh-nen="images/BanDo.jpg"
          :tieu-de="$t('service.Mapping')"
          :mo-ta="$t('service.MappingDes')"
          :link="'/blog/thanh-lap-ban-do-1'"
        />
        <component-card-service
          anh-nen="images/InAn.jpg"
          :tieu-de="$t('service.PrintingIndustry')"
          :mo-ta="$t('service.PrintingIndustryDes')"
          :link="'/blog/in-cong-nghiep'"
        />
        <component-card-service
          anh-nen="images/VienTham.jpg"
          :tieu-de="$t('service.RemoteSensing')"
          :mo-ta="$t('service.RemoteSensingDes')"
          :link="'/blog/vien-tham'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import componentCardService from '~/components/home/CardService.vue'
export default {
  components: {
    componentCardService
  }
}
</script>

<style scoped>
#services {
  padding: 60px 0 40px 0;
}
</style>
