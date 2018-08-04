<template>
  <div class="question">
    <header class="question-header">
      <i class="question-header__back"
         @click="$router.back()">
      </i>
      <span class="question-header__title">
        在线问答
      </span>
    </header>

    <nuxt />

    <footer class="question-footer">
      <van-button class="question-footer__btn">
        <i>x</i>联系客服
      </van-button>
    </footer>
    <div class="question-footer placeholder">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/css/common/var.scss";

.question {
  background: #f5f6fa;
  width: 100%;
  &-header {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #ff4c4c, #ff7559);
    position: relative;
    &__back {
      width: 13px;
      height: 18px;
      position: absolute;
      left: 20px;
      background: url("~/assets/images/common/switch_left.png") no-repeat;
      background-position: center center;
      background-size: 100% 100%;
    }
    &__title {
      font-size: 18px;
      color: #fff;
    }
  }

  &-footer {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;

    &.placeholder {
      position: static;
      visibility: hidden;
    }

    &__btn {
      width: 100%;
      height: 100%;
      background: $bg-right;
      color: #fff;
      font-size: 16px;
      border-radius: 0;
    }
  }

  &-list {
    padding-left: 20px;
    background: #fff;
    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: normal;
      margin: 0;
      font-size: 16px;
      color: $gray-color;
      height: 60px;
      padding-right: 20px;
      border-bottom: 1px solid #c7c6cc;
      &--more {
        width: 40px;
        height: 20px;
        border-radius: 10px;
        font-size: 12px;
        color: $gray-color;
        border: 1px solid $gray-color;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
