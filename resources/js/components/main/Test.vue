<template>
    <div>
        home/Test.vue

        {{testState}}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState('tests', ['testState'])
        },
    }
</script>

<style scoped>

</style>