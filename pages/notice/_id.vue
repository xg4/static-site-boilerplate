<template>
  <div class="notice-detail">

    <xHeader title="公告" />

    <div class="notice-detail__body">
      <h2 class="notice-detail__title">
        [清明暮春]宜：播种希望
      </h2>
      <p class="notice-detail__date">
        <i class="notice-detail__date--icon"></i> {{ Date.now() | formatDate()}}
      </p>
      <section class="notice-detail__content">
        暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者暮春者
      </section>
    </div>
  </div>
</template>

<script>
import xHeader from '~/components/common/header'
import { formatDate } from '~/utils'

export default {
  components: {
    xHeader
  },
  filters: {
    formatDate
  }
}
</script>

<style lang="scss">
@import "~/assets/css/common/var.scss";

.notice-detail {
  min-height: 100vh;
  background: #fff;
  &__body {
    padding: 40px 20px;
  }
  &__title {
    margin-bottom: 15px;
    font-size: 24px;
    color: #000;
  }
  &__date {
    font-size: 12px;
    color: $gray-color;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    &--icon {
      width: 12px;
      height: 12px;
      background: url("~/assets/images/notice/time.png") no-repeat;
      background-size: 100% 100%;
      margin-right: 5px;
    }
  }
  &__content {
    line-height: 1.5;
    font-size: 17px;
    color: #303133;
  }
}
</style>
