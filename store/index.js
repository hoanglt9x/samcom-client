export const state = () => ({
  locale: 'en',
  locales: ['vi', 'en'],
  anhInfo: '/images/BackgroundInforDefault.jpg'
})

export const mutations = {
  setLanguage(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
