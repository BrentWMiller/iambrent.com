const getDefaultState = () => ({
  snippets: [],
});

export const state = getDefaultState;

export const getters = {};

export const mutations = {
  SET_SNIPPETS(state, snippets) {
    state.snippets = snippets;
  },
};

export const actions = {
  async getSnippets({ commit }) {
    const query = `
      query {
        collection: codeSnippetCollection {
          total
          items {
            title
            code
            tags
          }
        }
      }
    `;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.$config.contentful.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    try {
      const response = await fetch(
        this.$config.contentful.baseUrl,
        fetchOptions
      ).then((res) => res.json());

      commit("SET_SNIPPETS", response.data.collection.items);
    } catch (error) {}
  },
};
