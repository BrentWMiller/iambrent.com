export const state = () => ({
  projects: []
})

export const mutations = {
  setProjects(state, list) {
    state.projects = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      '~/assets/content/project/',
      false,
      /\.json$/
    )
    let projects = files.keys().map((key) => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setProjects', projects)
  }
}
