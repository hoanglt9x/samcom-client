<template>
  <div id="TopPage">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
        <b-navbar-brand class="mb-0">
          <img
            src="/images/logo.png"
            class="d-inline-block align-top"
            alt="SAMCOM-VN"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- Home -->
            <b-nav-item
              v-scroll-to="'#TopPage'"
              :class="{ active: navItem === 0 }"
              exact
              @click="routerTab('/', 0)"
              >{{ $t('links.home').toUpperCase() }}</b-nav-item
            >

            <!-- About -->
            <b-nav-item-dropdown
              :text="$t('links.about.name').toUpperCase()"
              right
              :class="{ active: navItem === 1 }"
            >
              <b-dropdown-item
                v-scroll-to="'#about'"
                to="/"
                @click="activeNav(1)"
                >{{ $t('links.about.general') }}
              </b-dropdown-item>
              <b-dropdown-item @click="routerTab('letter', 1)">{{
                $t('links.about.open-letter')
              }}</b-dropdown-item>
              <b-dropdown-item to="/" @click="activeNav(1)">{{
                $t('links.about.thanhvien')
              }}</b-dropdown-item>
              <b-dropdown-item to="/" @click="activeNav(1)">{{
                $t('links.about.history')
              }}</b-dropdown-item>
              <b-dropdown-item to="/" @click="activeNav(1)">{{
                $t('links.about.companyStruct')
              }}</b-dropdown-item>
              <b-dropdown-item to="/" @click="activeNav(1)">{{
                $t('links.about.achievement')
              }}</b-dropdown-item>
              <b-dropdown-item to="/" @click="activeNav(1)">{{
                $t('links.about.equipment')
              }}</b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- Service -->
            <b-nav-item
              v-scroll-to="'#services'"
              to="/"
              :class="{ active: navItem === 2 }"
              @click="activeNav(2)"
              >{{ $t('links.service').toUpperCase() }}</b-nav-item
            >

            <!-- Blog -->
            <b-nav-item-dropdown
              :text="$t('links.News.name').toUpperCase()"
              right
              :class="{ active: navItem === 3 }"
            >
              <!-- <b-dropdown-item>{{ $t('links.News.RandD') }} </b-dropdown-item> -->
              <b-dropdown-item to="/" @click="activeNav(3)">{{
                $t('links.News.internalNews')
              }}</b-dropdown-item>
              <!-- <b-dropdown-item to="/">{{
                $t('links.News.specializedNews')
              }}</b-dropdown-item> -->
              <b-dropdown-item to="/" @click="activeNav(3)">{{
                $t('links.News.countryNews')
              }}</b-dropdown-item>
              <b-dropdown-item to="/" @click="activeNav(3)">{{
                $t('links.News.foreignNews')
              }}</b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- Project -->
            <b-nav-item
              v-scroll-to="'#services'"
              to="/"
              :class="{ active: navItem === 4 }"
              @click="activeNav(4)"
              >{{ $t('links.Project').toUpperCase() }}</b-nav-item
            >

            <!-- Team -->
            <b-nav-item
              v-scroll-to="'#team'"
              to="/"
              :class="{ active: navItem === 5 }"
              @click="activeNav(5)"
              >{{ $t('links.Team').toUpperCase() }}</b-nav-item
            >

            <!-- Gallery -->
            <b-nav-item
              v-scroll-to="'#portfolio'"
              to="/"
              :class="{ active: navItem === 6 }"
              @click="activeNav(6)"
              >{{ $t('links.Gallery').toUpperCase() }}</b-nav-item
            >

            <!-- Contact -->
            <b-nav-item
              v-scroll-to="'#contact'"
              :class="{ active: navItem === 7 }"
              @click="activeNav(7)"
              >{{ $t('links.Contact').toUpperCase() }}</b-nav-item
            >

            <!-- Email -->
            <b-nav-item href="http://mail.samcom.com.vn/webmail/">{{
              $t('links.Email').toUpperCase()
            }}</b-nav-item>

            <!-- Langue -->
            <img class="flag2" :src="flagNav" :alt="lang" />
            <b-nav-item-dropdown class="dropLang" :text="lang" right>
              <b-dropdown-item @click="updateLocale('vi')">
                <img class="flag" src="/images/VietNamFlag.png" alt="vi" />
                &nbsp;
                {{ $t('links.vietnamese') }}
              </b-dropdown-item>
              <b-dropdown-item @click="updateLocale('en')">
                <img class="flag" src="/images/KingdomFlag.png" alt="en" />
                &nbsp;
                {{ $t('links.english') }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form> -->
            <!-- <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // lang: this.$t('links.vietnamese'),
      // navItem: 0
    }
  },
  computed: {
    lang() {
      if (this.$i18n.locale === 'vi') return this.$t('links.vietnamese')
      else return this.$t('links.english')
    },
    flagNav() {
      if (this.$i18n.locale === 'vi') return '/images/VietNamFlag.png'
      else return '/images/KingdomFlag.png'
    },
    navItem() {
      return this.$store.state.navItem
    }
  },
  methods: {
    updateLocale(locale) {
      this.$i18n.locale = locale
      // if (locale === 'vi') this.lang = this.$t('links.vietnamese')
      // else this.lang = this.$t('links.english')
    },
    activeNav(item) {
      // this.navItem = item
      this.$store.commit('setNavItem', item)
    },
    scrollto(refLocation) {
      const el = document.querySelector(refLocation)
      window.scrollTo({ top: el.offsetTop })
    },
    routerTab(url, item) {
      this.activeNav(item)
      this.$router.push({ path: url })
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.85) !important;
  padding: 0 0.5rem !important;
  height: 60px !important;
}
.show {
  background-color: rgba(0, 0, 0, 0.85) !important;
}
.nav-item {
  padding-left: 20px;
}
img {
  height: 44px !important;
  padding-left: 25px;
}
.active {
  color: yellow !important;
  font-weight: bold !important;
}
.flag {
  height: 24px !important;
  padding-left: 5px !important;
}
.flag2 {
  height: 24px !important;
  width: 32px;
  padding-left: 10px !important;
  padding-top: 0px;
  margin-top: 7px;
}
.dropLang {
  padding-left: 5px !important;
}
</style>
