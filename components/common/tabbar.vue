<template>
  <footer>
    <div class="x-tabbar">
      <nuxt-link :to="item.to"
                 class="x-tabbar-item"
                 v-for="(item,index) in tabs"
                 :key="`tab${index}`">
        <i class="x-tabbar-item__icon"></i>
        <span class="x-tabbar-item__text">{{item.text}}</span>
      </nuxt-link>
    </div>
    <div class="x-tabbar placeholder">
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      tabs: [{
        text: '主页',
        to: '/'
      }, {
        text: '出售',
        to: '/sell'
      }, {
        text: 'QQ咨询',
        to: '/qq'
      }, {
        text: '我的',
        to: '/profile'
      }]
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/css/common/var.scss";

.x-tabbar {
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid $border-color;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  &.placeholder {
    position: static;
    visibility: hidden;
  }
  &-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #808080;
    &.nuxt-link-exact-active {
      color: #ff4c4c;
      &:nth-child(1) {
        .x-tabbar-item__icon {
          background: url("~/assets/images/tabbar/home_fill.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      &:nth-child(2) {
        .x-tabbar-item__icon {
          background: url("~/assets/images/tabbar/sell_fill.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      &:nth-child(3) {
        .x-tabbar-item__icon {
          background: url("~/assets/images/tabbar/qq_fill.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      &:nth-child(4) {
        .x-tabbar-item__icon {
          background: url("~/assets/images/tabbar/user_fill.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    &:nth-child(1) {
      .x-tabbar-item__icon {
        background: url("~/assets/images/tabbar/home.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    &:nth-child(2) {
      .x-tabbar-item__icon {
        background: url("~/assets/images/tabbar/sell.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    &:nth-child(3) {
      .x-tabbar-item__icon {
        background: url("~/assets/images/tabbar/qq.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    &:nth-child(4) {
      .x-tabbar-item__icon {
        background: url("~/assets/images/tabbar/user.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    &__icon {
      width: 24px;
      height: 24px;
      margin-bottom: 5px;
    }
    &__text {
      font-size: 12px;
    }
  }
}
</style>
