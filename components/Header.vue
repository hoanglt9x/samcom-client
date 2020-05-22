<template>
  <div>
    <header>
      <!-- Header Start -->
      <div class="header-area header-sticky">
        <div class="container-fluid">
          <div class="row align-items-center">
            <!-- Logo -->
            <div class="col-xl-2 col-lg-1 col-md-1">
              <div class="logo">
                <img src="/images/HeaderLogo.png" alt="SAMCOM-VN" />
              </div>
            </div>
            <div class="col-xl-10 col-lg-11 col-md-9">
              <!-- Main-menu -->
              <div class="main-menu f-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="caseStudies.html">Case Studies</a></li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <ul class="submenu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="single-blog.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul class="submenu">
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="elements.html">Element</a></li>
                        <li><a href="case_details.html">Case Details</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- Mobile Menu -->
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header End -->
    </header>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.header-area {
  padding: 0 230px;
  background: #1c1b23;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .header-area {
    padding: 0 75px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .header-area {
    padding: 0 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header-area {
    padding: 0 70px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .header-area {
    padding: 0 70px;
  }
}

@media (max-width: 767px) {
  .header-area {
    padding: 0 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header-area {
    padding-top: 12px;
    padding-bottom: 12px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .header-area {
    padding-top: 12px;
    padding-bottom: 12px;
  }
}

@media (max-width: 767px) {
  .header-area {
    padding-top: 12px;
    padding-bottom: 12px;
  }
}

.header-area .main-menu ul li {
  display: inline-block;
  position: relative;
  z-index: 1;
}

.header-area .main-menu ul li a {
  color: #fff;
  font-weight: 500;
  padding: 37px 27px;
  display: block;
  font-size: 16px;
  position: relative;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .header-area .main-menu ul li a {
    padding: 30px 20px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .header-area .main-menu ul li a {
    padding: 30px 13px;
  }
}

.header-area .main-menu ul li:hover > a {
  /* color: #da0000; */
  color: yellow;
}

.header-area .main-menu ul ul.submenu {
  position: absolute;
  width: 170px;
  background: #fff;
  left: 0;
  top: 120%;
  visibility: hidden;
  opacity: 0;
  border-top: 5px solid #bf0100;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
  padding: 17px 0;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}

.header-area .main-menu ul ul.submenu > li {
  margin-left: 7px;
  display: block;
}

.header-area .main-menu ul ul.submenu > li > a {
  padding: 6px 10px !important;
  font-size: 14px;
  color: #0b1c39;
}

.header-area .main-menu ul ul.submenu > li > a:hover {
  color: #bf0100;
}

.header-area ul > li:hover > ul.submenu {
  visibility: visible;
  opacity: 1;
  top: 100%;
}

.header-sticky ul li a {
  padding: 10px 19px;
}

.header-sticky.sticky-bar.sticky .main-menu ul > li > a {
  padding: 20px 20px;
}

.slicknav_menu .slicknav_icon-bar {
  background-color: #da0000 !important;
}

.header-sticky.sticky-bar.sticky .header-btn .get-btn {
  padding: 20px 20px;
}

.header-area .slicknav_btn {
  top: -41px;
}

.slicknav_menu .slicknav_nav a:hover {
  background: transparent;
  color: #da0000;
}

.slicknav_menu {
  background: transparent;
  margin-top: 0px !important;
}

.slicknav_nav {
  margin-top: -7px;
}

.mobile_menu {
  position: absolute;
  right: 0px;
  width: 100%;
  z-index: 99;
  top: 12px;
}

.slider-height {
  min-height: 800px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider-height {
    min-height: 600px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .slider-height {
    min-height: 600px;
  }
}

@media (max-width: 767px) {
  .slider-height {
    min-height: 450px;
  }
}

.slider-height2 {
  min-height: 350px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

@media (max-width: 767px) {
  .slider-height2 {
    min-height: 300px;
  }
}
</style>
