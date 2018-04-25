import Vue from "vue"
import Vuex from "vuex"
import jQuery from 'jquery';

import "_styles/main.scss"

import App from "_components/App.vue"
import store from "_vuex/store"


window.jQuery = jQuery;
window.$ = jQuery;

new Vue({
    ...App,
    store
}).$mount("#app")