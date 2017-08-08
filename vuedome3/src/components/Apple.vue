<template>
  <div class="hello">
    <h2>这是苹果的组件内容:{{ comVal }}/{{color}}</h2>
    <router-view></router-view>
    <button @click="subtractone">+</button>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data () {
    return {
      comVal: '我是苹果!',
      price: 10
    }
  },
  computed: {
    color: function () {
      return this.$route.params.color
    }
  },
  methods: {
    subtractone () {
      this.$store.dispatch('decrease', this.price)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
