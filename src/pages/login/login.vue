<style scoped>
.login-img {
  width: 70%;
  margin-bottom: 20px;
}

.login-wrap {
  width: 70%;
  text-align: center;
}

.inline-label {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  margin: 5px 0;
  line-height: 2.3;
  text-align: left;
}

.inline-label > span {
  width: 60px;
}

.inline-label > input {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 4px 10px;
  outline: 0;
}

.inline-label > input:focus {
  border-color: #7f7fbf;
}

.form-btn {
  font-size: 15px;
  font-weight: 700;
  line-height: 2.5;
  border-radius: 4px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #3399ff;
  color: #fff;
  outline: 0;
  border: 0;
  margin-top: 15px;
}

.form-btn:active {
  background-color: #3190ef;
}

.copy {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 15px;
  text-align: center;
}
</style>

<template>
  <div class="full-wrap flex-column flex-center">
    <img class="login-img" src="../../assets/images/login.jpg" alt="不积跬步，无以至千里。不积小流，无以成江河。">
    <div class="login-wrap">
      <form> 
        <label class="inline-label">
          <span>帐号：</span>
          <input type="text" placeholder="请输入帐号">
        </label>
        <label class="inline-label">
          <span>密码：</span>
          <input type="password" placeholder="请输入密码">
        </label>
        <button class="form-btn">登录</button>
      </form>
    </div>

    <div class="copy">&copy; Sennki 2017 All Rights Reserved</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
