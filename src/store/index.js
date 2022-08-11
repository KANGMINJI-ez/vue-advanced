import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation.js';
import actions from './actions.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    }
  },
    // SET_NEWS(state, news) {
    //   state.news = news;
    // },
    // SET_JOBS(state, jobs) {
    //   state.jobs = jobs;
    // },
    // SET_ASK(state, ask) {
    //   state.ask = ask;
    // },
  mutations,
  actions,
   
    // FETCH_NEWS(context) {
    //   fetchNewsList()
    //   .then(response => {
    //     console.log(response.data);
    //     context.commit("SET_NEWS", response.data);
    //     // state.news = response.data;

    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // }, 
    // FETCH_JOBS({ commit }) {
    //   fetchJobsList()
    //   .then(({ data }) => {
    //     console.log(data);
    //     commit("SET_JOBS", data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // },
    // FETCH_ASK({ commit }) {
    //   fetchAskList()
    //   .then(({ data }) => {
    //     console.log(data);
    //     commit("SET_ASK", data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // },
  
});