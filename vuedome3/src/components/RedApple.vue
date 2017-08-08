<template>
  <div class="hello">
    <h3>这是苹果的组件子组件内容:{{ comVal }}:{{totalPrice}}</h3>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data () {
    return {
      comVal: '我是红色的苹果!'
    }
  },
  computed: {
    totalPrice () {
      return this.$store.getters.getTotal
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
