<template>
  <div class="join">

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
                  @click="step++">注册</van-button>

      <p class="account-protocol">
        <van-checkbox class="account-protocol__radio"
                      v-model="agree">
        </van-checkbox>
        我已阅读并同意易店无忧
        <nuxt-link to="/"
                   class="account-protocol__key">
          《用户协议》
        </nuxt-link>
      </p>
    </div>

    <div class="account-content"
         v-else>
      <div class="account-input">
        <input type="text"
               class="account-input__inner"
               placeholder="请输入您的昵称">
        <p class="account-input__toolbar">
          <i class="account-input__toolbar--icon">x</i>
        </p>
      </div>
      <p class="account-input__tip">
        14位英文或7位汉字，设置后不可修改
      </p>

      <div class="account-input">
        <input type="password"
               class="account-input__inner"
               placeholder="请输入密码">
        <p class="account-input__toolbar">
          <i class="account-input__toolbar--icon">x</i>
        </p>
      </div>
      <p class="account-input__tip">
        6-14个字符，支持数字、大小写不允许空格
      </p>

      <div class="account-input">
        <input type="text"
               class="account-input__inner"
               placeholder="请输入您的QQ">
        <p class="account-input__toolbar">
          <i class="account-input__toolbar--icon">x</i>
        </p>
      </div>

      <p class="account-tooltip">{{errMsg}}</p>

      <van-button class="account-btn">确认</van-button>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      errMsg: '错误信息',
      agree: false,
      step: 0
    }
  }
}
</script>

<style lang="scss">
.join {
  .account-content {
    margin-top: 40px;
  }
}
</style>
