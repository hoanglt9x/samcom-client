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
            <b-nav-item to="/" active exact>{{
              $t('links.home').toUpperCase()
            }}</b-nav-item>

            <!-- About -->
            <b-nav-item-dropdown
              :text="$t('links.about.name').toUpperCase()"
              right
            >
              <b-dropdown-item v-scroll-to="'#about'"
                >{{ $t('links.about.general') }}
              </b-dropdown-item>
              <b-dropdown-item v-b-scrollspy:contact to="/">{{
                $t('links.about.open-letter')
              }}</b-dropdown-item>
              <b-dropdown-item to="/">{{
                $t('links.about.thanhvien')
              }}</b-dropdown-item>
              <b-dropdown-item to="/">{{
                $t('links.about.history')
              }}</b-dropdown-item>
              <b-dropdown-item to="/">{{
                $t('links.about.companyStruct')
              }}</b-dropdown-item>
              <b-dropdown-item to="/">{{
                $t('links.about.achievement')
              }}</b-dropdown-item>
              <b-dropdown-item to="/">{{
                $t('links.about.equipment')
              }}</b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- Service -->
            <b-nav-item v-scroll-to="'#services'">{{
              $t('links.service').toUpperCase()
            }}</b-nav-item>

            <!-- Blog -->
            <b-nav-item-dropdown
              :text="$t('links.News.name').toUpperCase()"
              right
            >
              <b-dropdown-item>{{ $t('links.News.RandD') }} </b-dropdown-item>
              <b-dropdown-item v-b-scrollspy:contact to="/">{{
                $t('links.News.internalNews')
              }}</b-dropdown-item>
              <b-dropdown-item to="/">{{
                $t('links.News.specializedNews')
              }}</b-dropdown-item>
              <b-dropdown-item to="/">{{
                $t('links.News.countryNews')
              }}</b-dropdown-item>
              <b-dropdown-item to="/">{{
                $t('links.News.foreignNews')
              }}</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav-item-dropdown {
  color: white !important;
}
.nav-item {
  color: white !important;
}
.navbar {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
.bg-dark {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
.navbar-nav {
  color: white !important;
  font-weight: bold;
}
.nav-link.active {
  color: yellow !important;
  font-weight: bold !important;
}
.nav-link {
  color: white !important;
  font-weight: bold !important;
}
li:hover {
  color: yellowgreen !important;
}
span {
  color: white !important;
  font-weight: bold !important;
}
</style>
