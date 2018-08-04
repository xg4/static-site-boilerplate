<template>
  <div class="help-list">
    <xHeader title="关于淘宝网店" />
    <ul class="help-list__box">
      <nuxt-link tag="li"
                 class="help-list__item"
                 to="/help/123"
                 v-for="(item,index) in 20"
                 :key="`list${index}`">
        <i class="help-list__icon"></i>易店无忧淘宝店铺出售流程
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
import xHeader from '~/components/common/header'

export default {
  components: {
    xHeader
  }
}
</script>

<style lang="scss">
@import "~/assets/css/common/var.scss";

.help-list {
  background: #fff;
  min-height: 100vh;
  &__box {
    padding: 5px 0 5px 20px;
  }
  &__item {
    padding: 15px 0;
    border-bottom: 1px dashed $border-color;
    font-size: 14px;
    color: #797a80;
  }
  &__icon {
    width: 8px;
    height: 10px;
    display: inline-block;
    background: url("~/assets/images/help/right_arrow.png") no-repeat;
    background-size: 100% 100%;
    margin-right: 7px;
  }
}
</style>
