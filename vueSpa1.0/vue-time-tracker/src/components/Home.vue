<template>
  <div class="jumbotron">
      <h1>任务追踪</h1>
      <p>
        <strong>
          <a v-link="'/time-entries'">创建一个任务</a>
        </strong>
      </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
