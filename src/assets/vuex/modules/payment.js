import { SET_ADD_PAYMENT, SET_REMOVE_PAYMENT, REMOVE_ALL } from '../mutation-types'

export default {
    state: {
        list: []
    },
    getters: {
        getPayment: state => {
            return state.list
        }
    },
    mutations: {
        [SET_ADD_PAYMENT] (state, item) {
            const productExist = state.list.find(p => (p.id === item.id))

            if(productExist) {
                state.list = state.list.map(i => {
                    if(i.id == item.id && i.quantity < (item.quantity - item.paid)) {
                        i.quantity++
                    } 

                    return i
                })
            } else {
                let aux = {
                    id: item.id,
                    product: item.product,
                    price: item.price,
                    quantity: 1
                }
                state.list.push(aux)
            }
        },
        [SET_REMOVE_PAYMENT] (state, item) {
            state.list = state.list.filter( p => p.id !== item.id)
        },
        [REMOVE_ALL] (state) {
            state.list = []
        }
    },
    actions: {
        setAddPayment ({commit}, item) {
            commit("SET_ADD_PAYMENT", item)
        },
        setRemovePayment ({commit}, item) {
            commit("SET_REMOVE_PAYMENT", item)
        },
        removeAll ({commit}) {
            commit("REMOVE_ALL")
        }
    }
}