<template>
  <section id="projects">
    <div class="container">
      <header class="section-header">
        <h3>{{ $t('links.Project').toUpperCase() }}</h3>
        <hr />
      </header>
      <div class="row">
        <component-card-project
          anh-nen="images/project1.jpg"
          :tieu-de="$t('service.AerialPhotography')"
          mo-ta="DỰ ÁN THÀNH LẬP BẢN ĐỒ ĐỊA HÌNH TỶ LỆ 1/10.000 BẰNG ẢNH HÀNG KHÔNG CÔNG TRÌNH THỦY ĐIỆN YABASSI – CỘNG HÒA CAMEROON"
          link="aerial-photography"
        />
        <component-card-project
          anh-nen="images/Project2.jpg"
          :tieu-de="$t('service.FieldSurveying')"
          mo-ta="CÔNG TY TRẮC ĐỊA BẢN ĐỒ BÁO CÁO KẾT QUẢ THỬ NGHIỆM XÂY DỰNG CSDL GIS 3D TẠI THỪA THIÊN – HUẾ"
        />
        <component-card-project
          anh-nen="images/Project3.jpg"
          :tieu-de="$t('service.Database')"
          mo-ta="TÍCH CỰC TRIỂN KHAI DỰ ÁN “XÂY DỰNG CƠ SỞ DỮ LIỆU NỀN THÔNG TIN CƠ BẢN PHỤC VỤ QUY HOẠCH, PHÁT TRIỂN KINH TẾ - XÃ HỘI VÀ GIÁM SÁT TÀI NGUYÊN THIÊN NHIÊN VÀ MÔI TRƯỜNG CHDCND LÀO”"
        />
        <component-card-project
          anh-nen="images/Project4.jpg"
          :tieu-de="$t('service.Mapping')"
          mo-ta="CÔNG TY TNHH MTV TRẮC ĐỊA BẢN ĐỒ TRIỂN KHAI THI CÔNG DỰ ÁN TỔNG THỂ HỒ SƠ ĐỊA CHÍNH VÀ XÂY DỰNG CSDL ĐỊA CHÍNH TRÊN ĐỊA BÀN THÀNH PHỐ HÀ NỘI"
        />
        <component-card-project
          anh-nen="images/project1.jpg"
          :tieu-de="$t('service.AerialPhotography')"
          mo-ta="DỰ ÁN THÀNH LẬP BẢN ĐỒ ĐỊA HÌNH TỶ LỆ 1/10.000 BẰNG ẢNH HÀNG KHÔNG CÔNG TRÌNH THỦY ĐIỆN YABASSI – CỘNG HÒA CAMEROON"
          link="aerial-photography"
        />
        <component-card-project
          anh-nen="images/Project2.jpg"
          :tieu-de="$t('service.FieldSurveying')"
          mo-ta="CÔNG TY TRẮC ĐỊA BẢN ĐỒ BÁO CÁO KẾT QUẢ THỬ NGHIỆM XÂY DỰNG CSDL GIS 3D TẠI THỪA THIÊN – HUẾ"
        />
        <component-card-project
          anh-nen="images/Project3.jpg"
          :tieu-de="$t('service.Database')"
          mo-ta="TÍCH CỰC TRIỂN KHAI DỰ ÁN “XÂY DỰNG CƠ SỞ DỮ LIỆU NỀN THÔNG TIN CƠ BẢN PHỤC VỤ QUY HOẠCH, PHÁT TRIỂN KINH TẾ - XÃ HỘI VÀ GIÁM SÁT TÀI NGUYÊN THIÊN NHIÊN VÀ MÔI TRƯỜNG CHDCND LÀO”"
        />
        <component-card-project
          anh-nen="images/Project4.jpg"
          :tieu-de="$t('service.Mapping')"
          mo-ta="CÔNG TY TNHH MTV TRẮC ĐỊA BẢN ĐỒ TRIỂN KHAI THI CÔNG DỰ ÁN TỔNG THỂ HỒ SƠ ĐỊA CHÍNH VÀ XÂY DỰNG CSDL ĐỊA CHÍNH TRÊN ĐỊA BÀN THÀNH PHỐ HÀ NỘI"
        />
      </div>
    </div>
  </section>
</template>

<script>
import componentCardProject from '~/components/home/CardProject.vue'
export default {
  components: {
    componentCardProject
  }
}
</script>

<style scoped>
#projects {
  padding: 60px 0 40px 0;
}
</style>
