<template>
  <div class="login">
    <div class="account-title">
      <ul class="login-tab">
        <li class="login-tab__item"
            :class="type===0?'login-tab__item--active':''"
            @click="type=0">
          <span class="login-tab__text">账号登录</span>
        </li>
        <li class="login-tab__item"
            :class="type===1?'login-tab__item--active':''"
            @click="type=1">
          <span class="login-tab__text">短信登录</span>
        </li>
      </ul>
    </div>

    <div class="account-content"
         v-if="type===0">
      <div class="account-input">
        <input type="text"
               class="account-input__inner"
               placeholder="请输入用户名">
        <p class="account-input__toolbar">
          <i class="account-input__toolbar--icon">x</i>
        </p>
      </div>
      <div class="account-input">
        <input type="password"
               class="account-input__inner"
               placeholder="请输入密码">
        <p class="account-input__toolbar">
          <i class="account-input__toolbar--icon">i</i>
          <i class="account-input__toolbar--icon">x</i>
        </p>
      </div>

      <p class="account-tooltip">{{errMsg}}</p>

      <van-button class="account-btn">登录</van-button>

      <p class="login-more">
        <nuxt-link class="login-more__item"
                   to="/account/join">注册</nuxt-link>
        <nuxt-link class="login-more__item"
                   to="/account/find">忘记密码</nuxt-link>
      </p>
    </div>
    <div class="account-content"
         v-else>
      <template v-if="step===0">
        <div class="account-input">
          <input type="tel"
                 class="account-input__inner"
                 placeholder="请输入手机号码">
          <p class="account-input__toolbar">
            <i class="account-input__toolbar--icon">x</i>
          </p>
        </div>

        <p class="account-tooltip">{{errMsg}}</p>

        <van-button class="account-btn"
                    @click="step++">下一步</van-button>
      </template>
      <template v-else>
        <div class="login-phone">
          <p class="login-phone__label">验证码已发送至：
            <span>{{phoneNumber}}</span>
          </p>
          <van-button class="login-phone__btn">
            重新获取
          </van-button>
        </div>

        <div class="account-input">
          <input type="tel"
                 class="account-input__inner"
                 placeholder="请输入短信验证码">
          <p class="account-input__toolbar">
            <i class="account-input__toolbar--icon">x</i>
          </p>
        </div>

        <p class="account-tooltip">{{errMsg}}</p>

        <van-button class="account-btn"
                    @click="showMulti=true">登录</van-button>
      </template>
    </div>

    <transition name="x-fade">
      <div class="multi-modal"
           @click="showMulti=false"
           v-if="showMulti">
        <div class="multi-dialog"
             @click.stop>
          <i class="multi-dialog__close"
             @click="showMulti=false">x</i>
          <h5 class="multi-dialog__title">
            <p class="multi-dialog__title--one">您的手机号下有多个账号关联</p>
            <p class="multi-dialog__title--two">请选择其中一个作为此手机号的关联账号</p>
          </h5>
          <ul class="multi-list">
            <li class="multi-list__item"
                v-for="(item,index) in 8"
                :key="index">
              <span class="multi-list__label">x</span>
              <van-checkbox name="index"
                            class="multi-list__value">
              </van-checkbox>
            </li>
          </ul>
          <van-button class="multi-dialog__btn">
            确认
          </van-button>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 0,
      step: 0,
      errMsg: '密码错误！',
      phoneNumber: 16602822552,
      showMulti: false
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/common/var.scss";

.login {
  &-tab {
    display: flex;
    background-color: #f5e9e9;
    height: 100%;
    &__item {
      flex: 1;
      display: flex;
      justify-content: center;
      font-size: 16px;
      color: #000;
      &--active {
        .login-tab__text {
          border-bottom: 2px solid #ff4c4c;
        }
      }
    }
    &__text {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: border 0.2s;
    }
  }
  &-more {
    margin: 20px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__item {
      font-size: 16px;
      color: #000;
    }
  }
  &-phone {
    font-size: 16px;
    color: $gray-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__label {
      span {
        color: #000;
      }
    }
    &__btn {
      padding: 0;
      font-size: 16px;
      color: $gray-color;
      border: none;
    }
  }

  .multi-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2000;
    .multi-dialog {
      width: 310px;
      height: 310px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: #fff;
      border-radius: 10px;
      padding: 40px 30px 0;
      position: relative;
      &__close {
        width: 12px;
        height: 12px;
        position: absolute;
        top: 20px;
        right: 20px;
      }
      &__title {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        font-size: 14px;
        font-weight: normal;
        &--one {
          color: #000;
          margin-bottom: 6px;
        }
        &--two {
          color: $gray-color;
        }
      }
      .multi-list {
        border-top: 1px solid $border-color;
        border-bottom: 1px solid $border-color;
        height: 90px;
        overflow-y: scroll;
        margin-bottom: 30px;
        &__item {
          height: 45px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid $border-color;
          padding: 0 5px;
        }
      }
      &__btn {
        width: 200px;
        height: 45px;
        border-radius: 22px;
        color: #fff;
        font-size: 16px;
        background: $bg-left;
        display: block;
        margin: 0 auto;
        box-shadow: 0 10px 20px rgba(255, 76, 76, 0.3);
      }
    }
  }
}
</style>
