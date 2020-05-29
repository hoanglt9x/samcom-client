export const state = () => ({
  locale: 'vi',
  locales: ['vi', 'en'],
  anhInfo: '/4.jpg',
  navItem: 0
})

export const mutations = {
  setLanguage(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  setNavItem(state, value) {
    state.navItem = value
  },
  setImageLayout(state, image) {
    state.anhInfo = image
  }
}
