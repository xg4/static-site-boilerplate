<template>
  <main class="profile">
    <header class="profile-header"
            :style="{backgroundImage:`url(${theme.img})`}">
      <div class="profile-header__info">
        <span class="profile-header__name">
          你好，浅夏安然
        </span>
        <span class="profile-header__verify">
          <img class="profile-header__verify--img"
               :src="theme.verifyImg">
          <span>{{theme.text}}</span>
        </span>
      </div>

      <div class="x-profile-board">
        <nuxt-link to="/"
                   class="x-profile-board__item">
          <p>可用余额:
            <span>￥ 44920.00</span>
          </p>
          <p>冻结资金:
            <span class="disabled">￥ 44920.00</span>
          </p>
        </nuxt-link>
        <nuxt-link to="/"
                   class="x-profile-board__item">
          <span class="x-profile-board__value">12</span>
          <span class="x-profile-board__label">我的收藏</span>
        </nuxt-link>
        <nuxt-link to="/"
                   class="x-profile-board__item">
          <span class="x-profile-board__value">12</span>
          <span class="x-profile-board__label">优惠券</span>
        </nuxt-link>
      </div>
    </header>

    <section class="profile-body">
      <section class="profile-tabs">
        <div class="profile-tabs__item">
          <img class="profile-tabs__icon"
               :src="require('~/assets/images/profile/buyer_icon.png')">
          <span class="profile-tabs__text">我是买家</span>
        </div>
        <div class="profile-tabs__item">
          <img class="profile-tabs__icon"
               :src="require('~/assets/images/profile/seller_icon.png')">
          <span class="profile-tabs__text">我是卖家</span>
        </div>
      </section>

      <div class="profile-more">
        <nuxt-link to="/"
                   class="profile-more__title">
          更多设置
        </nuxt-link>
        <div class="profile-more__tabs"
             v-for="(tabs,index) in more"
             :key="`tabs${index}`">

          <template v-for="(item,i) in tabs">
            <nuxt-link :key="`item${i}`"
                       :to="item.to"
                       class="profile-more__item"
                       :class="isVerify?'':'disabled'"
                       v-if="item.to">
              <span :style="item.style"
                    class="profile-more__icon"
                    :class="`profile-more__icon${i+index*3}`">
                <img :src="isVerify?item.imgFill:item.img">
              </span>
              <span class="profile-more__text">
                {{item.text}}
              </span>
            </nuxt-link>
            <div :key="`item${i}`"
                 v-else
                 class="profile-more__item disabled">
            </div>
          </template>

        </div>
      </div>

    </section>

    <xTabbar />
  </main>
</template>

<script>
import xTabbar from '~/components/common/tabbar'

const THEME_MAP = {
  0: {
    img: require('~/assets/images/profile/0.png'),
    text: '未认证',
    verifyImg: require('@/assets/images/profile/verify0.png')
  },
  1: {
    img: require('~/assets/images/profile/1.png'),
    text: '认证中',
    verifyImg: require('@/assets/images/profile/verify0.png')
  },
  2: {
    img: require('~/assets/images/profile/2.png'),
    text: '已认证',
    verifyImg: require('@/assets/images/profile/verify1.png')
  }
}

const MORE_MAP = [
  [{
    to: '/',
    img: require('@/assets/images/profile/more_money.png'),
    imgFill: require('@/assets/images/profile/more_money.png'),
    text: '资金管理'
  }, {
    to: '/',
    img: require('@/assets/images/profile/more_sign.png'),
    imgFill: require('@/assets/images/profile/more_sign.png'),
    text: '我的签章'
  }, {
    to: '/',
    img: require('@/assets/images/profile/more_verify.png'),
    imgFill: require('@/assets/images/profile/more_verify.png'),
    text: '实名认证'
  }],
  [{
    to: '/',
    img: require('@/assets/images/profile/more_safe.png'),
    imgFill: require('@/assets/images/profile/more_safe.png'),
    text: '安全设置'
  }, {
    to: '/',
    img: require('@/assets/images/profile/more_about.png'),
    imgFill: require('@/assets/images/profile/more_about_fill.png'),
    text: '关于我们'
  }, {}]
]

export default {
  data () {
    return {
      more: MORE_MAP,
      status: 2 // is verify status, change status for theme
      // 0未认证 1认证中 2已认证
    }
  },
  computed: {
    theme () {
      const status = this.status in THEME_MAP ? this.status : 0
      return THEME_MAP[status]
    },
    isVerify () {
      return this.status === 2
    }
  },
  components: {
    xTabbar
  }
}
</script>

<style lang="scss">
@import "~/assets/css/common/var.scss";

.profile {
  width: 100%;
  &-header {
    width: 100%;
    height: 140px;
    background-size: 100% 100%;
    padding: 40px 20px 0;
    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }
    &__name {
      font-size: 20px;
    }
    &__verify {
      font-size: 16px;
      display: flex;
      align-items: center;
      &--img {
        width: 30px;
        height: 20px;
        margin-right: 5px;
      }
    }

    .x-profile-board {
      width: 100%;
      height: 80px;
      border-radius: 6px;
      background: #fff;
      transform: translate3d(0, 50%, 0);
      display: flex;
      box-shadow: $bs;
      overflow: hidden;
      &__item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
        &:active {
          background-color: $active-color;
        }
        &:first-child {
          flex: 2;
          p {
            font-size: 12px;
            color: #616266;
            &:first-child {
              margin-bottom: 15px;
            }
            span {
              font-size: 14px;
              color: #303133;
              &.disabled {
                color: #c2c4cc;
              }
            }
          }
        }
      }
      &__value {
        color: $title-color;
        font-size: 20px;
        margin-bottom: 10px;
      }
      &__label {
        color: $gray-color;
        font-size: 14px;
      }
    }
  }

  &-body {
    margin-top: 60px;
    padding: 0 20px;
  }

  &-tabs {
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    &__item {
      width: 170px;
      height: 100%;
      border-radius: 6px;
      font-size: 18px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      &:first-child {
        background-image: url("~/assets/images/profile/buyer_bg.png");
        box-shadow: 0 10px 20px rgba(255, 64, 64, 0.2);
        .profile-tabs__icon {
          width: 30px;
        }
      }
      &:last-child {
        background-image: url("~/assets/images/profile/seller_bg.png");
        box-shadow: 0 10px 20px rgba(0, 128, 255, 0.2);
        .profile-tabs__icon {
          width: 35px;
        }
      }
    }
    &__icon {
      width: 32px;
      height: 35px;
      margin-right: 5px;
    }
  }

  &-more {
    width: 100%;
    // height: 250px;
    border-radius: 6px;
    background: #fff;
    box-shadow: $bs;
    overflow: hidden;
    &__title {
      width: 100%;
      height: 45px;
      padding-left: 20px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: $gray-color;
      border-bottom: 1px solid $border-color;
      &:active {
        background-color: $active-color;
      }
    }
    &__tabs {
      display: flex;
      height: 100px;
    }
    &__item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition: background-color 0.2s;
      &:not(.disabled):active {
        background-color: $active-color;
      }
    }
    &__item:not(.disabled) {
      .profile-more__icon {
        &0 {
          background: linear-gradient(60deg, #ccb87a, #b28f47);
          box-shadow: 0 4px 8px rgba(204, 163, 82, 0.3);
        }
        &1 {
          background: linear-gradient(60deg, #33bbff, #6a4cff);
          box-shadow: 0 4px 8px rgba(0, 128, 255, 0.3);
        }
        &2 {
          background: linear-gradient(60deg, #33ddff, #3399ff);
          box-shadow: 0 4px 8px rgba(0, 213, 255, 0.3);
        }
        &3 {
          background: linear-gradient(60deg, #98d957, #1f991f);
          box-shadow: 0 4px 8px rgba(41, 204, 41, 0.3);
        }
        &4 {
          background: linear-gradient(60deg, #ff4c4c, #ff7559);
          box-shadow: 0 4px 8px rgba(255, 76, 76, 0.3);
        }
      }
      .profile-more__text {
        color: $title-color;
      }
    }
    &__icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      margin-bottom: 8px;
      background: linear-gradient(60deg, #c6c7cc, #adaeb2);
      box-shadow: 0 4px 8px rgba(194, 195, 204, 0.3);
    }
    &__text {
      font-size: 14px;
      color: $gray-color;
    }
  }
}
</style>
