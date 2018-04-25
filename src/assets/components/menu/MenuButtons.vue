<template>
    <div class="menu">
        <div class="menu__button" @click="toogleModal">
            Histórico de pagamento
        </div>
        <div class="menu__button" @click="addPayment()">
            Enviar para pagamento 
        </div>
        <div class="menu__button" @click="payAll()">
            Pagar valor restante
        </div>
        <div class="menu__button" @click="payChoosed()">
            Pagar selecionados
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from "vuex"

    export default {
        props: {
            buttons: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            ...mapActions([
                "setAddPayment",
                "toogleModal",
                "pay"
            ]),
            addPayment() {
                const item = this.$store.getters.activeItem

                if(item && item.id) {
                    this.setAddPayment(item)
                } else {
                    alert("Selecione um item")
                }
            },
            payChoosed() {
                const data = {
                    tableId: this.$store.getters.getTable,
                    valorTotal: this.$store.getters.getPayment.reduce( 
                                    (total, item) => total + (item.quantity * item.price), 0),
                    items: this.$store.getters.getPayment
                }

                console.log(data)
            },
            payAll(){
                const tableId = this.$store.getters.getTable
                    , list = this.$store.getters.getList(tableId)
                    
                const data = {
                    tableId: tableId,
                    valorTotal: list.items.reduce( 
                                    (total, item) => total + ((item.quantity - item.paid) * item.price), 0),
                    items: list.items
                }

                console.log(data)
            }
        },
        computed: {
        }
    }
</script>
<style lang="scss" scoped>
    .menu {
        padding: 0 20px;

        &__button {
            width: 200px;
            padding: 10px 15px;
            text-align: center;
            border: 1px solid #000;
            margin-bottom: 10px;
            cursor: pointer;
        }
    }
</style>
