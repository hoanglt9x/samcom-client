<template>
  <div class="col-lg-3 col-md-6 ">
    <div class="member">
      <img :src="hinhAnh" class="img-fluid" :alt="ten" />
      <div class="member-info">
        <div class="member-info-content">
          <h4>{{ ten }}</h4>
          <span>{{ viTri }}</span>
          <div class="social">
            <a href>
              <i class="fa fa-twitter" />
            </a>
            <a href>
              <i class="fa fa-facebook" />
            </a>
            <a href>
              <i class="fa fa-google-plus" />
            </a>
            <a href>
              <i class="fa fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hinhAnh: {
      type: String,
      default: ''
    },
    ten: {
      type: String,
      default: ''
    },
    viTri: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
#team .member {
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

#team .member .member-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.2s;
  padding: 15px 0;
  background: rgba(29, 28, 41, 0.6);
}

#team .member .member-info-content {
  transition: margin 0.2s;
  height: 40px;
  transition: height 0.4s;
}

#team .member:hover .member-info {
  transition: 0.4s;
}

#team .member:hover .member-info-content {
  height: 80px;
}

#team .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
  color: #fff;
}

#team .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
  color: #fff;
}

#team .member .social {
  margin-top: 15px;
}

#team .member .social a {
  transition: none;
  color: #fff;
}

#team .member .social a:hover {
  color: #1bb1dc;
}

#team .member .social i {
  font-size: 18px;
  margin: 0 2px;
}
</style>
