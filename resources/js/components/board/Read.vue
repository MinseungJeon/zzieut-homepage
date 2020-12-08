<template>
  <div>
    <table>
      <tr>
        <td>글쓴이</td>
        <td>제목</td>
        <td>내용</td>
      </tr>
      <tr :key="index" v-for="(value, index) in data">
        <td>{{value.writer}}</td>
        <td>{{value.title}}</td>
        <td>{{value.content}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import data from '../../../../data/board.json'
export default {
  
}
</script>