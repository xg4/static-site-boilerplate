<template>
  <div class="help-detail">
    <xHeader title="关于淘宝网店" />

    <section class="help-detail__body">
      <h2 class="help-detail__title">
        淘宝店铺转让前买家可以看店铺地址吗？
      </h2>
      <div class="help-detail__content">
        不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以不可以
      </div>

      <xFeedback />
    </section>

  </div>
</template>

<script>
import xHeader from '~/components/common/header'
import xFeedback from '~/components/help/feedback'

export default {
  components: {
    xFeedback,
    xHeader
  }
}
</script>

<style lang="scss">
@import "~/assets/css/common/var.scss";

.help-detail {
  position: relative;
  background: #fff;
  min-height: 100vh;
  &__body {
    padding: 0 20px;
  }
  &__title {
    margin: 0;
    padding: 40px 0 30px;
    border-bottom: 1px solid $border-color;
    font-size: 24px;
    color: $title-color;
    font-weight: normal;
  }
  &__content {
    padding: 30px 0 40px;
    line-height: 1.5;
    color: #616266;
    font-size: 16px;
    letter-spacing: 1px;
  }
}
</style>
