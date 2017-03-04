<template>
  <form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Name" v-model="name">
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="password">
    </div>
  </div>
  
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" @click="register" class="btn btn-default">Register</button>
    </div>
  </div>
  
</form>
</template>

<script>
      export default{
      data(){
        return {
            name: '',
            email: '',
            password: ''
        }
      },

     methods:{
            register () {

            
        
          Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken)

    ,next()
}),
          
         

        this.$http.get("api/register/create")
        .then(response => {
           console.log(response.data)

          //this.$router.push('/feed')
        })
      }
      }

     }
</script>

<style>

</style>
