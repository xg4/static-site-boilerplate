<template>
  <div class="notice">
    <xHeader title="公告" />
    <ul class="notice-list">
      <nuxt-link tag="li"
                 to="/notice/123"
                 class="notice-list__item"
                 v-for="(item,index) in 20"
                 :key="`list${index}`">
        <h3 class="notice-list__title">
          易店无忧淘宝网店转让 帮你打造电商行业的领导者
        </h3>
        <p class="notice-list__date">
          {{ Date.now() | formatDate('yy-mm-dd hh:mm')}}
        </p>
      </nuxt-link>
    </ul>
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

.notice {
  background: #fff;
  min-height: 100vh;
  &-list {
    padding: 15px 0 15px 20px;
    &__item {
      padding: 20px 0;
      border-bottom: 1px solid $border-color;
    }
    &__title {
      line-height: 1.5;
      margin-bottom: 15px;
      font-size: 18px;
      color: #000;
    }
    &__date {
      font-size: 14px;
      color: #adaed3;
    }
  }
}
</style>
