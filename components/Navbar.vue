<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand tag="h1" class="mb-0">
          <img
            src="/images/logo.png"
            class="d-inline-block align-top"
            alt="Kitten"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              ><nuxt-link to="/">{{ $t('links.home') }}</nuxt-link></b-nav-item
            >

            <b-nav-item-dropdown :text="$t('links.about.name')" right>
              <b-dropdown-item>
                <nuxt-link to="/">{{ $t('links.about.general') }}</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item
                ><nuxt-link to="/">{{
                  $t('links.about.open-letter')
                }}</nuxt-link></b-dropdown-item
              >
              <b-dropdown-item
                ><nuxt-link to="/">{{
                  $t('links.about.thanhvien')
                }}</nuxt-link></b-dropdown-item
              >
              <b-dropdown-item
                ><nuxt-link to="/">{{
                  $t('links.about.history')
                }}</nuxt-link></b-dropdown-item
              >
              <b-dropdown-item
                ><nuxt-link to="/">{{
                  $t('links.about.companyStruct')
                }}</nuxt-link></b-dropdown-item
              >
              <b-dropdown-item
                ><nuxt-link to="/">{{
                  $t('links.about.achievement')
                }}</nuxt-link></b-dropdown-item
              >
              <b-dropdown-item
                ><nuxt-link to="/">{{
                  $t('links.about.equipment')
                }}</nuxt-link></b-dropdown-item
              >
            </b-nav-item-dropdown>

            <b-nav-item
              ><nuxt-link to="/about">{{
                $t('links.about.name')
              }}</nuxt-link></b-nav-item
            >
            <b-nav-item href="/about">Disabled</b-nav-item>
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
    <component-video-overlay />
  </div>
</template>

<script>
import componentVideoOverlay from '~/components/VideoOverlay.vue'
export default {
  components: {
    componentVideoOverlay
  }
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  color: yellow;
}
.dropdown-menu {
  background-color: black;
}
</style>
