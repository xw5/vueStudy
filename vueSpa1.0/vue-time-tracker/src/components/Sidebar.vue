<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h1 class="text-center">已有时长</h1>
        </div>
        <div class="panel-body">
            <h1 class="text-center">{{ time }} 小时</h1>
        </div>
    </div>
</template>

<script>
export default {
    props:['time']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
