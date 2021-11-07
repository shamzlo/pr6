import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store =new Vuex.Store({
    plugins:[createPersistedState()],
    state:{
        count:0,
    },
    mutations: {
        setCount:(state,c)=> state.count = c,
    },
    getters: {
        getCount:(state,c)=>{
            return state.count
        } ,
    }
})
export default store;