<template>
  <div class="hello">
    <h2>这是苹果的组件内容:{{ comVal }}/{{color}}/{{totalPrice}}</h2>
    <button @click="addone">+</button>
  </div>
</template>

<script>
export default {
  name: 'banana',
  data () {
    return {
      comVal: '我是香焦!',
      price: 10
    }
  },
  computed: {
    color: function () {
      return this.$route.params.color
    },
    totalPrice () {
      return this.$store.getters.getTotal
    }
  },
  methods: {
    addone () {
      this.$store.dispatch('increase', this.price)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
