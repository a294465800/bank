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
  margin: 5px 0 30px;
  line-height: 2.3;
  text-align: left;
  position: relative;
}

.inline-label > span {
  width: 6rem;
  font-size: 14px;
}

.inline-label > input {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 10px;
  outline: 0;
  min-width: 100px;
}

.inline-label > input:focus {
  border-color: #7f7fbf;
}

.form-tips {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1em;
  font-size: 12px;
  color: red;
  transform: translateY(100%);
  margin: 0;
  padding-left: 6rem;
}

.inline-label > input.error {
  border-color: red;
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
  position: absolute;
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
          <input :class="{error: wrongTip.username}" type="text" placeholder="请输入帐号" v-model="loginForm.username" @blur="checkForm('username')">
          <p v-if="wrongTip.username" class="form-tips">{{formCheck.username.message}}</p>
        </label>
        <label class="inline-label">
          <span>密码：</span>
          <input :class="{error: wrongTip.password}" type="password" placeholder="请输入密码" v-model="loginForm.password" @blur="checkForm('password')">
          <p v-if="wrongTip.password" class="form-tips">{{formCheck.password.message}}</p>
        </label>
        <button class="form-btn" @click.prevent="login">登录</button>
      </form>
    </div>

    <div class="copy">&copy; Sennki 2017 All Rights Reserved</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      formCheck: {
        username: { message: "帐号不能为空" },
        password: { message: "密码不能为空" }
      },
      wrongTip: {
        username: false,
        password: false
      }
    };
  },

  created() {},

  methods: {
    /**
     * 登录函数
     */
    login() {
      if (this.loginForm.username && this.loginForm.password) {
        this.$http.postLogin(this.loginForm, res => {
          sessionStorage.username = this.loginForm.username;
          this.$router.push("/");
        });
      } else {
        return false;
      }
    },

    /**
   * 表单验证
   */
    checkForm(formName) {
      if (this.loginForm[formName] === "") {
        this.wrongTip[formName] = true;
      } else {
        this.wrongTip[formName] = false;
      }
    }
  }
};
</script>
