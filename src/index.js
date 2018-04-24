import Vue from "vue"
import Vuex from "vuex"

import App from "_components/App.vue"
import store from "_vuex/store"


new Vue({
    ...App,
    store
}).$mount("#app")