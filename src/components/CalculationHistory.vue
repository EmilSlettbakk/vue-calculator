<template>
  <div>
    <h2>Calculation History:</h2>
    <ul>
      <li v-for="(item, index) in calcHistory" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    calcHistory: Array
  }
}
</script>

<style>
h2 {
  color: rgb(255, 255, 255);
  font-family: Arial, sans-serif
}
</style>