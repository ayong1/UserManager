<template>
  <div class="edit container">
    <alert v-if="alert" :mseeage="alert"></alert>
    <h1 class="page-header">编辑用户</h1>
    <form @submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.username" />
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email" />
        </div>
        <div class="form-group">
          <label>学历</label>
          <input
            type="text"
            class="form-control"
            placeholder="education"
            v-model="customer.education"
          />
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input
            type="text"
            class="form-control"
            placeholder="graduationschool"
            v-model="customer.graduationschool"
          />
        </div>
        <div class="form-group">
          <label>职业</label>
          <input
            type="text"
            class="form-control"
            placeholder="profession"
            v-model="customer.profession"
          />
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea rows="10" class="form-control" v-model="customer.profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";

export default {
  components: {
    Alert
  },
  name: "add",
  data() {
    return {
      customer: {},
      alert:''
    };
  },
  methods: {
    updateCustomer(e) {
      if (!this.customer.username || !this.customer.phone || !this.customer.email) {
        // console.log("请添加对应信息");
        this.alert = "请添加对应信息";
      } else {
        
        this.$http
          .post(
            "http://47.95.228.1/phpcrud/app.php?action=update&id=" + this.$route.params.id,{
              "username": this.customer.username,
              "phone": this.customer.phone,
              "email": this.customer.email
            }
          )
          .then(function(data) {
              console.log(this.$route.params.id);
            this.$router.push({
              path: "/",
              query: {
                alert: "用户信息更新成功"
              }
            });
          });
      }
      e.preventDefault();
    }
  },
  created() {
    this.$http
      .get("http://47.95.228.1/phpcrud/app.php?action=info&id=" + this.$route.params.id)
      .then(function(data) {
          // console.log(data.body.users);
          this.customer = data.body.users[0];
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
