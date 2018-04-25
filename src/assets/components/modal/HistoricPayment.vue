<template>
    <div class="modal" :class="{'modal--active': modal}">

    </div>
</template>
<script>
    import { mapGetters } from "vuex"

    export default {
        computed: {
            ...mapGetters([
                "modal"
            ])
        }
    }
</script>
<style lang="scss" scoped>
    .modal {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        width: 500px;
        height: 300px;
        background-color: #fff;
        border: 1px solid #000;

        &--active {
            display: block;
        }
    }
</style>