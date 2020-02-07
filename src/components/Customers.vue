<template>
  <div class="customers container">
    <alert v-if="alert" :mseeage="alert"></alert>
    <h1 class="page-herder">大勇哥用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- filterBy(filterInput) -->
        <tr v-for="(item, index) in filterBy(filterInput)" :key="index">    
          <td>{{item.username}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td><router-link class="btn btn-default" :to="'/customer/'+item.id">详情</router-link> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      alert:'',
      filterInput:''
    }
  },
  methods: {
    fetchCustomers(){
      this.$http.get('http://47.95.228.1/phpcrud/app.php').then(function(data){
        // console.log(data.body.users);
        
        this.customers = data.body.users;
      }) 
    },
    filterBy(search){
      // this.fetchCustomers();
      return this.customers.filter((data)=>{
        return data.username.match(search);
      })
    }
  },
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  // updated() {
  //   this.fetchCustomers();
  // },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
