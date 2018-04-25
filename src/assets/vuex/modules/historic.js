import { SET_HISTORIC } from "../mutation-types"

export default {
    state: {
        list: []
    },
    mutations: {
        [SET_HISTORIC] (state, data) {
            state.list.push(data)
        }
    },
    actions: {
        setHistoric ({commit}, data) {
            commit("SET_HISTORIC", data)
        }
    }
}