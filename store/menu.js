const getDefaultState = () => ({
  menuVisible: false
});

export const state = getDefaultState;

export const getters = {
};

export const mutations = {
  SET_MENU_VISIBILITY(state, visible) {
    state.menuVisible = visible;
  },
};

export const actions = {
  async setMenuVisibility({ commit }, visible) {
    commit('SET_MENU_VISIBILITY', visible);
  },
};