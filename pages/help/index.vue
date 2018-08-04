<template>
  <div class="help">
    <header class="help-header">
      <i class="help-header__back"
         @click="$router.back()"></i>
      <h2 class="help-header__title">帮助中心</h2>
      <p class="help-header__intro">我们为您提供更多帮助</p>
    </header>

    <ul class="help-tab">
      <nuxt-link class="help-tab__item"
                 v-for="(item,index) in tabs"
                 :key="`tab${index}`"
                 tag="li"
                 :to="item.to">
        <img class="help-tab__icon"
             :src="item.img" />
        <span class="help-tab__text">{{item.name}}</span>
      </nuxt-link>
    </ul>

    <section class="help-content">
      <xHelpCard v-for="(item,index) in cards"
                 :key="`card${index}`"
                 :card="item" />
    </section>

  </div>
</template>

<script>
import xHelpCard from '~/components/help/card.vue'

export default {
  computed: {
    cards () {
      return [{
        img: require('@/assets/images/help/card_buyer.png'),
        title: '买家帮助',
        list: ['网店购买流程', '网店购买流程', '网店购买流程', '网店购买流程']
      }, {
        img: require('@/assets/images/help/card_seller.png'),
        title: '卖家帮助',
        list: ['网店购买流程', '网店购买流程', '网店购买流程', '网店购买流程']
      }, {
        img: require('@/assets/images/help/card_safe.png'),
        title: '安全保障',
        list: ['网店购买流程', '网店购买流程', '网店购买流程', '网店购买流程']
      }, {
        img: require('@/assets/images/help/card_account.png'),
        title: '账号帮助',
        list: ['网店购买流程', '网店购买流程', '网店购买流程', '网店购买流程']
      }]
    },
    tabs () {
      return [{
        img: require('@/assets/images/help/tab_taobao.png'),
        name: '淘宝网店',
        to: '/help/list'
      },
      {
        img: require('@/assets/images/help/tab_tmail.png'),
        name: '天猫商城',
        to: '/help/list'
      },
      {
        img: require('@/assets/images/help/tab_other.png'),
        name: '其他网店',
        to: '/help/list'
      }]
    }
  },
  components: {
    xHelpCard
  }
}
</script>

<style lang="scss">
@import "@/assets/css/common/var.scss";

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

  &-tab {
    width: 100%;
    height: 110px;
    display: flex;
    background: #fff;
    &__item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &:active {
        background-color: $active-color;
      }
    }
    &__icon {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    &__text {
      font-size: 16px;
      color: $title-color;
    }
  }

  &-content {
    padding: 0 20px 40px;
  }
}
</style>
