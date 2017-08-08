<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input type="date" class="form-control" v-model="timeEntry.date" placeholder="date">
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input type="number" class="form-control" v-model="timeEntry.totalTime" placeholder="hours">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input type="text" class="form-control" v-model="timeEntry.comment" placeholder="comment">
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <button class="btn btn-default" v-link="'/time-entries'">取消</button>
    <hr/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timeEntry:{
        user:{
          name:'二哲',
          email:'kodo@forchange.cn',
          image:'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
        },
        date:'',
        totalTime:'',
        comment:''
      }
    }
  },
  methods:{
    save(){
      let timeEntry=this.timeEntry;
      this.$dispatch('timeUpdate',timeEntry)
      this.timeEntry={};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
