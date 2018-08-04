<template>
  <div class="x-help-card">
    <h4 class="x-help-card__title">
      <img class="x-help-card__title--icon"
           :src="card.img" /> {{card.title}}
    </h4>
    <ul class="x-help-card__list">
      <nuxt-link class="x-help-card__item"
                 tag="li"
                 to="/help/123"
                 v-for="(item,index) in card.list"
                 :key="`list${index}`">
        <i class="x-help-card__item--icon"></i>{{item}}
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
}
</script>

<style lang="scss">
@import "~/assets/css/common/var.scss";

.x-help {
  &-card {
    border-radius: 6px;
    background-color: #fff;
    box-shadow: $bs;
    padding: 0 20px;
    margin-top: 20px;
    &__title {
      height: 55px;
      font-weight: normal;
      display: flex;
      align-items: center;
      border-bottom: 1px solid $border-color;
      font-size: 16px;
      &--icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    &__list {
      padding-bottom: 25px;
    }
    &__item {
      margin-top: 20px;
      font-size: 14px;
      color: #797a80;
      display: flex;
      align-items: center;
      &--icon {
        width: 8px;
        height: 10px;
        display: inline-block;
        background: url("~/assets/images/help/right_arrow.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 7px;
      }
    }
  }
}
</style>
