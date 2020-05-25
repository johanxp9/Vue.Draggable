import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const nested = {
  namespaced: true,
  state: {
    elements: [
      {
        id: 1,
        name: "Folder1",
        elements: []
      },
      {
        id: 2,
        name: "Folder2",
        elements: []
      },
      {
        id: 3,
        name: "Folder3",
        elements: []
      }
    ],
    elements2: [
      {
        id: 11,
        name: "File1"
      },
      {
        id: 12,
        name: "File2"
      },
      {
        id: 13,
        name: "File3"
      }
    ]
  },
  mutations: {
    updateElements: (state, payload) => {
      state.elements = payload;
    },
    updateElements2: (state, payload) => {
      state.elements2 = payload;
    }
  },
  actions: {
    updateElements: ({ commit }, payload) => {
      commit("updateElements", payload);
    },
    updateElements2: ({ commit }, payload) => {
      commit("updateElements2", payload);
    }
  }
};
