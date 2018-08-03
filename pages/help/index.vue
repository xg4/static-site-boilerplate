<template>
  <div class="help">
    <header class="help-header">
      <i class="help-header__back"
         @click="$router.back()"></i>
      <h2 class="help-header__title">帮助中心</h2>
      <p class="help-header__intro">我们为您提供更多帮助</p>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.help {
  width: 100%;
  &-header {
    height: 160px;
    width: 100%;
    background: url("~/assets/images/help/help_bg.png") no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    color: #fff;
    padding-left: 20px;
    padding-top: 15px;
    &__back {
      width: 13px;
      height: 20px;
      display: block;
      margin-bottom: 35px;
      background: url("~/assets/images/common/switch_left.png") no-repeat;
      background-position: center center;
      background-size: 100% 100%;
    }
    &__title {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &__intro {
      font-size: 16px;
    }
  }
}
</style>
