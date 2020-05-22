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
          link="aerial-photography"
        />
        <component-card-service
          anh-nen="images/DoDac.jpg"
          :tieu-de="$t('service.FieldSurveying')"
          :mo-ta="$t('service.FieldSurveyingDes')"
        />
        <component-card-service
          anh-nen="images/CoSoDuLieu.jpg"
          :tieu-de="$t('service.Database')"
          :mo-ta="$t('service.DatabaseDes')"
        />
        <component-card-service
          anh-nen="images/BanDo.jpg"
          :tieu-de="$t('service.Mapping')"
          :mo-ta="$t('service.MappingDes')"
        />
        <component-card-service
          anh-nen="images/InAn.jpg"
          :tieu-de="$t('service.PrintingIndustry')"
          :mo-ta="$t('service.PrintingIndustryDes')"
        />
        <component-card-service
          anh-nen="images/VienTham.jpg"
          :tieu-de="$t('service.RemoteSensing')"
          :mo-ta="$t('service.RemoteSensingDes')"
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
