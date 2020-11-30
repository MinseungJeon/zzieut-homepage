<template>
    <div class="Menu">
          <ul>
            <li class="title">Product</li>
            <li class="teams" @click="selectMenu(1)">Server</li>
            <li class="teams" @click="selectMenu(2)">iOS</li>
            <li class="teams" @click="selectMenu(3)">Android</li>
          </ul>
          <ul>
            <li class="title">Data Analysis & Machine Learning</li>
            <li class="teams" @click="selectMenu(4)">Data Scientist</li>
          </ul>
        </div>
</template>
<script>
export default {
    data() {
        return {
            isSelected: "",
            color: "",
        };
    },
    methods: {
        selectMenu(idx) {
            this.isSelected = idx;
            this.$emit("changeSelected", this.isSelected);   
        },
    },
};
</script>
<style scoped>
</style>