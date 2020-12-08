<template>
  <div id='bulletin'>
    <h2>게시판</h2>
    <ul>글목록
      <li>1</li>
      <li>2</li>
    </ul>
    <form v-on:submit="onSubmit">
      <input type="text" v-model="text" />
      <button @click="fetchData">등록</button>
    </form>
  </div>
</template>
<script>
export default {
  namespaced: true,
  el: 'bulletin',
  data(){
    text: ""
  },
  methods:{
    onSubmit(e){
      e.preventDefault();
      console.log(`text: ${this.text}`)
    }
  }
}
</script>
<style scoped lang='scss'>
  .bulletin {
    text-align: center;
  }
</style>