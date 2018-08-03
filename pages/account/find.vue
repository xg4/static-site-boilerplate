<template>
  <div class="find">
    <div class="account-content"
         v-if="step===0">
      <div class="account-input">
        <input type="tel"
               class="account-input__inner"
               placeholder="请输入手机号码">
        <p class="account-input__toolbar">
          <i class="account-input__toolbar--icon">x</i>
        </p>
      </div>

      <div class="account-input">
        <input type="tel"
               class="account-input__inner"
               placeholder="请输入短信验证码">
        <p class="account-input__toolbar">
          <van-button class="account-input__toolbar--btn">
            获取验证码
          </van-button>
        </p>
      </div>

      <p class="account-tooltip">{{errMsg}}</p>

      <van-button class="account-btn"
                  @click="step++">确认</van-button>

    </div>

    <div class="account-content"
         v-else>
      <div class="account-input">
        <input type="tel"
               class="account-input__inner"
               placeholder="请输入新密码">
        <p class="account-input__toolbar">
          <i class="account-input__toolbar--icon">x</i>
        </p>
      </div>

      <div class="account-input">
        <input type="tel"
               class="account-input__inner"
               placeholder="请再次输入密码">
        <p class="account-input__toolbar">
          <i class="account-input__toolbar--icon">x</i>
        </p>
      </div>

      <p class="account-tooltip">{{errMsg}}</p>

      <van-button class="account-btn"
                  @click="step++">确认</van-button>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 0,
      errMsg: '错误信息'
    }
  }
}
</script>

<style>
</style>
