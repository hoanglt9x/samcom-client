<template>
  <section id="services" class="section-bg">
    <div class="container">
      <header class="section-header">
        <h3>DỊCH VỤ</h3>
        <hr />
      </header>
      <div class="row">
        <component-card-service
          anh-nen="images/BayChup.jpg"
          tieu-de="BAY CHỤP ẢNH"
          mo-ta="Công ty TNHH MTV Trắc địa Bản đồ đã và đang áp dụng nhiều phương tiện bay chụp ảnh hàng không hiện đại."
          link="aerial-photography"
        />
        <component-card-service
          anh-nen="images/DoDac.jpg"
          tieu-de="ĐO ĐẠC NGOẠI NGHIỆP"
          mo-ta="Công ty TNHH MTV là một đơn vị có uy tín trong lĩnh vực đo đạc ngoại nghiệp phục vụ đa mục đích."
        />
        <component-card-service
          anh-nen="images/CoSoDuLieu.jpg"
          tieu-de="XÂY DỰNG CƠ SỞ DỮ LIỆU NỀN ĐỊA LÝ"
          mo-ta="Công ty TNHH MTV Trắc địa Bản đồ là một trong những đơn vị đi đầu trong lĩnh vực xây dựng CSDL địa lý theo quy trình khép kín: Từ khâu đo vẽ dữ liệu không gian dạng 2D, 3D; điều tra bổ sung ngoại nghiệp đến khâu kiểm soát chất lượng và biên tập bản đồ chế in."
        />
        <component-card-service
          anh-nen="images/BanDo.jpg"
          tieu-de="THÀNH LẬP BẢN ĐỒ"
          mo-ta="Công ty TNHH MTV Trắc địa Bản đồ đang ứng dụng các quy trình công nghệ hiện đại trong công tác thành lập các loại bản đồ phục vụ các mục đích quốc phòng và các ngành kinh tế khác nhau."
        />
        <component-card-service
          anh-nen="images/InAn.jpg"
          tieu-de="IN CÔNG NGHIỆP"
          mo-ta="Công ty TNHH MTV Trắc địa Bản đồ có công nghệ in tiên tiến nhất tại Việt Nam trong lĩnh vực in Offset tờ rời, được đầu tư trang bị khép kín từ khâu thiết kế, tạo mẫu, xuất kẽm, in ấn đến các công đoạn sau in, hoàn thiện sản phẩm."
        />
        <component-card-service
          anh-nen="images/VienTham.jpg"
          tieu-de="VIỄN THÁM"
          mo-ta="Phục vụ các mực đích làm bản đồ địa hình, bản đồ 3D các loại tỷ lệ, bản đồ biên giới, địa giới, các chương trình biển đảo, các nhiệm vụ quốc phòng, tìm kiếm cứu hộ cứu nạn, đánh giá tác động môi trường, dự báo xói lở, điều tra nông nghiệp, lâm nghiệp, quy hoạch xây dựng đô thị, xây dựng thủy điện, đường dây tuyến ống dẫn, quản lý kiểm kê đất đai."
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
