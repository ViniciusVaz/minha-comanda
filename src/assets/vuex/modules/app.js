import { SET_TABLE, SET_ACTIVE_ITEM, TOOGLE_MODAL } from "../mutation-types"

export default {
    state: {
        table: "",
        activeItem: {},
        modal: false
    },
    getters: {
        activeItem: state => {
            return state.activeItem
        },
        getTable: state => {
            return state.table
        },
        modal: state => {
            return state.modal
        }
    },
    mutations: {
        [SET_TABLE] (state, data) {
            state.table = data
        },
        [SET_ACTIVE_ITEM] (state, item) {
            state.activeItem = item
        },
        [TOOGLE_MODAL] (state) {
            state.modal = !state.modal
        }
    },
    actions: {
        setTable ({ commit }, data) {
            commit("SET_TABLE", data)
        },
        setActiveItem ({ commit }, item) {
            commit("SET_ACTIVE_ITEM", item)
        },
        toogleModal ({ commit }) {
            commit("TOOGLE_MODAL")
        }
    }
}