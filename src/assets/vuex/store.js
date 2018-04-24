import Vuex from "vuex"
import Vue from "vue"

import tables from "_vuex/modules/tables"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        tables
    }
})