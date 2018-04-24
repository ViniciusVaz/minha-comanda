<template>
    <div class="menu">
        <select name="table" id="table" @change="chooseTable(tableSelected)" v-model="tableSelected">
            <option selected value="empty">Selecione a mesa</option>
            <option v-for="(table, i) in tables" :key="i" :value="i"> Mesa {{ i }} </option>
        </select>
    </div>
</template>
<script>
    import { mapState } from "vuex"

    export default {
        data() {
            return {
                tableSelected: "empty"
            }
        },
        computed: {
            ...mapState([
                "tables"
            ])
        },
        methods: {
            chooseTable(item) {
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>
