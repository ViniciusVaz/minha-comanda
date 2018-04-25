import Vuex from "vuex"
import Vue from "vue"

import app from "_vuex/modules/app"
import tables from "_vuex/modules/tables"
import payment from "_vuex/modules/payment"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        tables,
        payment
    }
})