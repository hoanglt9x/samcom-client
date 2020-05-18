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
              {{ $t('company.name') }}
            </h3>
            <hr />
            <p style="text-align:justify; font-weight:bold">
              {{ $t('Introduction.Intro') }}
            </p>
            <p style="text-align:justify">
              {{ $t('Introduction.License1') }}
              <br />
              {{ $t('Introduction.License2') }}
              <br />
              {{ $t('Introduction.License3') }}
            </p>
            <ul style="text-align:justify">
              <li>
                <b-icon icon="check-circle"></b-icon>
                <a style="font-weight:bold">
                  {{ $t('Introduction.Headquarter') }}</a
                >
                <p>
                  {{ $t('Introduction.AddressHeadquarter') }}
                  <br />
                  {{ $t('Introduction.ContactHeadquarter') }}<br />
                  {{ $t('Introduction.Contact1Headquarter') }}
                </p>

                <b-icon icon="check-circle"></b-icon>
                <a style="font-weight:bold">
                  {{ $t('Introduction.SouthernBranch') }}</a
                >
                <p>
                  {{ $t('Introduction.AddressSouthernBranch') }}
                  <br />{{ $t('Introduction.ContactSouthernBranch') }}
                </p>
                <b-icon icon="check-circle"></b-icon>
                <a style="font-weight:bold">
                  {{ $t('Introduction.MiddleregionBranch') }}</a
                >
                <p>
                  {{ $t('Introduction.AddressMiddleregionBranch') }}
                  <br />{{ $t('Introduction.ContactMiddleregionBranch') }}
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
