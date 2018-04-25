<template>
    <div class="list" :class="[`list--${listType}`]">
        <h4>{{title}}</h4>
        <table class="list__table table">
            <thead class="table__header">
                <tr class="table__header__line">
                    <th class="table__header__line__column" v-for="(item, i) in header" :key="i">
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr class="table__body__line" :class="{'table__body__line--active': (item.id === activeItem.id && listType === 'list')}" :id="item.id" v-for="(item, i) in products" :key="i" @click="setActiveItem(item)">
                    <td class="table__body__line__column">
                        {{ item.quantity }}
                    </td>
                    <td class="table__body__line__column">
                        {{ item.product }}
                    </td>
                    <td class="table__body__line__column">
                        {{ item.price }}
                    </td>
                    <td class="table__body__line__column" v-if="listType === 'list'">
                        {{ totalPrice(item) }}
                    </td>
                    <td class="table__body__line__column" v-if="listType === 'payment'" @click="removeItem(item)">
                        X
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="list__total">
            <div class="list__total__label">
                Total <span>{{ totalBill }}</span>
            </div>
            <div class="list__total__label" v-if="listType === 'list'">
                Pago <span>{{ paidBill }}</span>
            </div>
            <div class="list__total__label" v-if="listType === 'list'">
                Restante <span>{{ openBill }}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data() {
            return {
                selectedItems: {}
            }
        },
        props: {
            products: {
                type: Array,
                default: () => []
            },
            header: {
                type: Array,
                default: () => []
            },
            title: {
                type: String,
                default: ""
            },
            listType: {
                type: String,
                default: "list"
            }
        },
        methods: {
            ...mapActions([
                "setActiveItem",
                "setRemovePayment"
            ]),
            totalPrice(item) {
                return item.price * item.quantity
            },
            removeItem(item) {
                this.setRemovePayment(item)
            }
        },
        computed: {
            ...mapGetters([
                "activeItem"
            ]),
            totalBill() {
                return this.products.reduce( (total, item) => total + (item.price * item.quantity), 0)
            },
            paidBill() {
                return this.products.reduce( (total, item) => total + (item.paid * item.price), 0)
            },
            openBill() {
                return this.products.reduce( (total, item) => total + ((item.quantity - item.paid) * item.price), 0)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .list {
        width: 450px;
        text-align: center;
        border: 1px solid #000;
        position: relative;

        &--payment {
            display: block;
        }

        &__total {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;

            &__label {
                min-width: 150px;
                display: flex;
                justify-content: space-between;
            }
        }

        .table {
            width: 100%;
            border-collapse: collapse;

            &__body {
                &__line {
                    &--active {
                        border: 1px solid #000;
                    }

                    &__column {
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
