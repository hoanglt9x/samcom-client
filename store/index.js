export const state = () => ({
  locale: 'vi',
  locales: ['vi', 'en'],
  anhInfo: '/images/BackgroundInforDefault.jpg',
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
  }
}
