<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
        {{customer.username}}
        <span class="pull-right">
            <router-link class="btn btn-primary" :to="'/edit/'+customer.id">
                编辑
            </router-link>
            <button class="btn btn-danger" @click="deleteCustomer(customer.id)">
                删除
            </button>
        </span>
    </h1>
    <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-earphone"> {{customer.phone}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-envelope"> {{customer.email}}</span></li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-home"> {{customer.education}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-flag"> {{customer.graduationschool}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-book"> {{customer.profession}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-camera"> {{customer.profile}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'customerdetails',
  data () {
    return {
        customer:[],
    }
  },
  methods: {
      fetchCustomers(id){
      this.$http.get('http://47.95.228.1/phpcrud/app.php?action=info&id='+id).then(function(data){
          console.log(data.body.users);
        // console.log(id);
        
        this.customer = data.body.users[0];
      }) 
    },
    deleteCustomer(id){
        console.log(id);
        
        this.$http.post('http://47.95.228.1/phpcrud/app.php?action=delete&id='+id)
        .then(function(){
            this.$router.push({
                path:"/",
                query:{
                    alert:"用户删除成功"
                }
            })
        })
    }
  },
  created() {
      this.fetchCustomers(this.$route.params.id);
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
