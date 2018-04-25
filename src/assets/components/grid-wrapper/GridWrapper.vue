<template>
    <div class="grid-wrapper" v-if="getList.length > 0">
        <List 
            :header="['Qtd', 'Itens', 'Valor Unitário', 'Total']"
            :products="getList"
            title="Itens consumidos"
        >
        </List>
        <MenuButtons />
        <List 
            :header="['Qtd', 'Itens', 'Valor Unitário', 'Remove']"
            :products="getPayment"
            title="Selecionados pagamento"
            listType="payment"
        >
        </List>
        <HistoricPayment />
    </div>
</template>
<script>
    import List from "_components/list/List.vue"
    import MenuButtons from "_components/menu/MenuButtons.vue"
    import HistoricPayment from "_components/modal/HistoricPayment.vue"

    export default {
        components: {
            List,
            MenuButtons,
            HistoricPayment
        },
        data() {
            return {
                idTable: ''
            }
        },
        computed: {
            getList() {
                this.idTable = this.$store.getters.getTable
                
                if(this.idTable !== "" && this.idTable !== "empty") {
                    let list = this.$store.getters.getList(this.idTable)

                    return list.items
                } else return []
            },
            getSelectedItems() {
                return this.$store.getters.getSelectedItems
            },
            getPayment() {
                return this.$store.getters.getPayment
            }
        }
    }
</script>
<style lang="scss" scoped>
    .grid-wrapper {
        display: flex;
        justify-content: center;

        &__button {
            width: 100%;
            text-align: center;
            padding: 10px 15px;
            border: 1px solid #000;
            cursor: pointer;
        }
    }
</style>
