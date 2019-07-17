import { GetterTree, ActionTree, MutationTree } from 'vuex';

import { State } from '@/store/interfaces/Blog.ts';
// Establece los types de los modulos store
import blogTypes from '@/store/types/BlogTypes';

const namespaced: boolean = true;

const state: State = {
    blogs: []
};
const getters: GetterTree<State, any> = {
  [blogTypes.getters.GETBLOGS] : ( state ) => {
    return state.blogs;
  },

};
const mutations: MutationTree<State> = {
  [blogTypes.mutations.SETBLOGS]: (state, blogs) => {
    state.blogs = blogs;
  },

};
const actions: ActionTree<State, any> = {
  [blogTypes.actions.ACTBLOGS]: ({ commit, state }, blog) => {
    const blogGuardados = state.blogs;
    commit(blogTypes.mutations.SETBLOGS, blogGuardados.concat(blog));
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
