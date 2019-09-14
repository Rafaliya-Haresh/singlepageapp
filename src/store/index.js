import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: []
    },
    getters: {
        dataArray: (state) => {
            return state.data
        }
    },
    mutations: {
        getData: (state, result) => {
            state.data = result;
        }
    },
    actions: {
        async getData({ commit }){
            const response = await axios.get('https://nodeloggedapi.herokuapp.com/api/v1/userlist')
            commit('getData', response.data)
        }
    }
});
