<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6">
          <div class="about-img">
            <component-caroul />
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <div class="about-content">
            <h2 style="text-align:center;">
              {{ $t('home.introduction').toUpperCase() }}
            </h2>
            <h3 style="font-style:normal; font-weight:700; text-align:center;">
              Công ty TNHH MTV Trắc địa Bản đồ
            </h3>
            <hr />
            <p style="text-align:justify; font-weight:bold">
              Tên giao dịch với nước ngoài: Survey and Aerial Mapping One Member
              Limited Liability Company (SAMCOM Co.Ltd) - Giấy chứng nhận Đăng
              ký kinh doanh Số: 0100107211 do phòng ĐKKD / Sở Kế hoạch và Đầu tư
              Thành phố Hà Nội cấp ngày 08 tháng 11 năm 2010 và đăng ký thay đổi
              lần 4 ngày 08 tháng 11 năm 2016.
            </p>
            <p style="text-align:justify">
              - Giấy phép hoạt động Đo đạc và Bản đồ số 1786 do Cục Đo đạc và
              Bản đồ Việt Nam cấp ngày 25 tháng 10 năm 2017.
              <br />
              - Chứng chỉ năng lực hoạt động xây dựng hạng I số BXD-00002948 do
              Cục Quản lý hoạt động xây dựng - Bộ Xây dựng cấp ngày 09 tháng 8
              năm 2017.
              <br />
              - Chứng chỉ ISO 9001:2015 số 2018-QMS-8032 do BVQA cấp ngày 03
              tháng 5 năm 2018 .
            </p>
            <ul style="text-align:justify">
              <li>
                <b-icon icon="check-circle"></b-icon>
                <a style="font-weight:bold"> Trụ sở chính</a>
                <p>
                  Địa chỉ: 2/198 Đường Trần Cung - Quận Bắc Từ Liêm - TP. Hà Nội
                  <br />
                  Điện thoại: (024) 3.755.8092 - Fax: (024) 3.755.8093 <br />
                  Website: samcom.com.vn; Email: info@samcom.com.vn
                </p>

                <b-icon icon="check-circle"></b-icon>
                <a style="font-weight:bold"> Chi nhánh miền Nam</a>
                <p>
                  Địa chỉ: Số 2 Cửu Long Q. Tân Bình- TP.HCM
                  <br />Điện thoại: (028).3.811.0058 - Fax: (028) 3.811.0564
                </p>
                <b-icon icon="check-circle"></b-icon>
                <a style="font-weight:bold"> Chi nhánh miền Trung</a>
                <p>
                  Địa chỉ: số 14 Yersin - TP. Đà Lạt - tỉnh Lâm Đồng
                  <br />Điện thoại : (0263).826.016 - Fax: (026) 3.825.747
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import componentCaroul from '~/components/home/CarouselIntro.vue'
export default {
  components: {
    componentCaroul
  }
}
</script>

<style scoped>
#about {
  padding: 30px 0;
}

#about .about-content {
  padding-top: 0px;
}

#about .about-content h2 {
  color: #413e66;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

#about .about-content h3 {
  color: #696592;
  font-weight: 400;
  font-size: 22px;
  font-style: italic;
}

#about .about-content ul {
  list-style: none;
  padding: 0;
}

#about .about-content ul li {
  padding-bottom: 10px;
}

#about .about-content ul li i {
  font-size: 20px;
  padding-right: 4px;
  color: #1bb1dc;
}

.b-icon {
  font-size: 20px;
  padding-right: 4px;
  color: #1bb1dc;
}

#about .about-img {
  position: relative;
  margin: 30px 30px 30px 30px;
}

#about .about-img img {
  width: 100%;
  border: 8px solid #fff;
  transition: 0.5s;
}

#about .about-img img:hover {
  width: 100%;
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}

#about .about-img::before {
  position: absolute;
  left: -31px;
  top: -30px;
  width: 90%;
  height: 92%;
  z-index: -1;
  content: '';
  background-color: #ebf1fa;
  transition: 0.5s;
}

#about .about-img::after {
  position: absolute;
  right: -31px;
  bottom: -30px;
  width: 90%;
  height: 92%;
  z-index: -1;
  content: '';
  background-color: #ebf1fa;
  transition: 0.5s;
}
</style>
