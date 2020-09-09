<template>
  <div class="container">
    <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3" >
      <form >
        <h2>Đăng nhập</h2>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" placeholder="Tài khoản" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" placeholder="Mật khẩu" />
        </div>
        <button class="btn btn-success" @click="$router.push({name: 'homepage'})">
          Đăng nhập
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  #login{
    height:200px;
    width: 500px;;
  }
</style>
