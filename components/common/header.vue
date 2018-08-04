<template>
  <header class="x-header">
    <i v-if="showBack"
       class="x-header__back"
       @click="$router.back()"></i>
    {{title}}
    <i v-if="showShare"
       class="x-header__share"></i>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    showShare: Boolean,
    showBack: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/css/common/var.scss";

.x-header {
  width: 100%;
  height: 45px;
  background: $bg-right;
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  &__back {
    width: 13px;
    height: 18px;
    position: absolute;
    left: 20px;
    background: url("~/assets/images/common/switch_left.png") no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }
  &__share {
    width: 22px;
    height: 22px;
    position: absolute;
    right: 20px;
    background: url("~/assets/images/common/share.png") no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }
}
</style>
