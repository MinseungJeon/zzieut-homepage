<template>
  <div>
    <h2>게시판</h2>
    <ul>글목록
      <li>1</li>
      <li>2</li>
    </ul>
    <button @click="write">글쓰기</button>
  </div>
</template>
<script>
export default {
  name: 'Board',
  data(){

  },
  methods:{
    write(){
      this.$router.push('/write')
    }
  }
}
</script>