<template>
    <div class="menu">
        <select name="table" id="table" @change="chooseTable(tableSelected)" v-model="tableSelected">
            <option selected value="empty">Selecione a mesa</option>
            <option v-for="(table, i) in tables.list" :key="i" :value="i"> Mesa {{ i }} </option>
        </select>
    </div>
</template>
<script>
    import { mapState, mapActions } from "vuex"

    export default {
        mounted() {
            this.setTable(this.tableSelected)
        },
        data() {
            return {
                tableSelected: "1"
            }
        },
        computed: {
            ...mapState([
                "tables"
            ])
        },
        methods: {
            ...mapActions([
                "setTable",
                "removeAll",
                "setActiveItem"
            ]),
            chooseTable(id) {
                this.setTable(id)
                this.setActiveItem({})
                this.removeAll()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .menu {
        text-align: center;
        padding: 10px;
    }
</style>
