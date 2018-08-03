<template>
  <section class="account">
    <header class="account-header">
      <i class="account-header__back"
         @click="$router.back()">
        &lt;
      </i>
    </header>
    <div class="account-brand">
      <i class="account-brand__logo"></i>
      <span class="account-brand__slogan">
        易店无忧，专注网店交易服务平台
      </span>
    </div>
    <section class="account-body">
      <nuxt />
    </section>
    <footer class="account-footer">
      <ul class="account-footer__links">

        <nuxt-link tag="li"
                   class="account-footer__link"
                   to="/">PC端</nuxt-link>
        <nuxt-link tag="li"
                   class="account-footer__link"
                   to="/">关于我们</nuxt-link>
        <nuxt-link tag="li"
                   class="account-footer__link"
                   to="/">帮助中心</nuxt-link>
        <nuxt-link tag="li"
                   class="account-footer__link"
                   to="/">联系我们</nuxt-link>
      </ul>
      <span class="account-footer__copy">易店无忧 &copy; 版权所有</span>
    </footer>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/common/var.scss";

.account {
  width: 100%;
  min-height: 100vh;
  position: relative;
  &-header {
    width: 100%;
    height: 45px;
    background: $bg-right;
    display: flex;
    align-items: center;
    &__back {
      margin-left: 20px;
    }
  }
  &-brand {
    width: 100%;
    height: 160px;
    background: $bg-right;
    display: flex;
    align-items: center;
    flex-direction: column;
    &__logo {
      width: 120px;
      height: 45px;
      margin: 10px 0;
      background: url("~/assets/images/logo.png") no-repeat;
      background-position: center center;
      background-size: 100% 100%;
    }
    &__slogan {
      font-size: 12px;
      color: #fff;
    }
  }
  &-body {
    margin: -55px 20px 0;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 8px 20px rgba(0, 25, 76, 0.1);
  }
  &-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom: 20px;
    &__links {
      display: flex;
      margin-bottom: 10px;
    }
    &__link {
      padding: 0 8px;
      color: #007aff;
      &:not(:last-child) {
        border-right: 1px solid #c6c7cc;
      }
    }
    &__copy {
      color: #919399;
    }
  }
  &-title {
    height: 55px;
  }
  &-content {
    padding: 0 30px;
    padding-bottom: 40px;
  }
  &-input {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #c6c7cc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__tip {
      margin-top: 7px;
      font-size: 12px;
      color: #919399;
    }
    &__inner {
      width: 100%;
      font-size: 16px;
      border: none;
      &::placeholder {
        color: #919399;
      }
    }
    &__toolbar {
      height: 26px;
      &--icon:not(:last-child) {
        margin-right: 15px;
      }
      &--btn {
        width: 100px;
        height: 100%;
        font-size: 12px;
        color: #007bff;
        border-radius: 13px;
        border: 1px solid #007bff;
      }
    }
  }

  &-tooltip {
    margin: 10px 0;
    float: right;
    color: #ff4c4c;
    font-size: 12px;
  }
  &-protocol {
    margin-top: 20px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #919399;
    &__radio {
      margin-right: 5px;
    }
    &__key {
      color: #ff4c4c;
    }
  }
  &-btn {
    background: $bg-left;
    color: #fff;
    font-size: 16px;
    width: 100%;
    border-radius: 4px;
    margin-top: 40px;
  }
}
</style>
