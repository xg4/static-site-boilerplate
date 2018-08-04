<template>
  <section class="home">
    <header class="home-header">
      <div class="home-header__title">
        <div class="home-header__brand">
          <div class="home-header__logo">

          </div>
          <div class="home-header__slogan">
            <p>六年深耕网店转让</p>
            <p>汇聚百万资源市场</p>
          </div>
        </div>
        <van-button type="default"
                    plain
                    class="home-header__sell">
          <i>x</i>我要出售
        </van-button>
      </div>
      <div class="home-header__search">
        <i class="home-header__search--icon">x</i>
        <span class="home-header__search--text">请输入关键词进行搜索</span>
      </div>
      <ul class="home-header__tabs">
        <li class="home-header__tab"
            v-for="(item,index) in 4"
            :key="index">
          <i class="home-header__tab--icon"></i>
          <span class="home-header__tab--text">天猫网店</span>
        </li>
      </ul>
      <ul class="home-header__tabs">
        <li class="home-header__tab"
            v-for="(item,index) in 4"
            :key="index">
          <i class="home-header__tab--icon"></i>
          <span class="home-header__tab--text">天猫网店</span>
        </li>
      </ul>
    </header>

    <div class="home-post">
      <i class="home-post__icon">x</i>
      <span class="home-post__text">易店无忧官网防骗公告！</span>
    </div>

    <div class="x-number-board">
      <div class="x-number-board__title">
        <span>昨日指数</span>
        <ul class="x-more">
          <li class="x-more__item"></li>
          <li class="x-more__item"></li>
          <li class="x-more__item"></li>
        </ul>
      </div>
      <ul class="x-number-board__content">
        <li class="x-number-board__item">
          <span class="value">1872</span>
          <span class="label">网店交易数量</span>
        </li>
        <li class="x-number-board__item">
          <span class="value">1872</span>
          <span class="label">网店交易金额</span>
        </li>
        <li class="x-number-board__item">
          <span class="value">1872</span>
          <span class="label">新增网店</span>
        </li>
      </ul>
    </div>

    <van-swipe :autoplay="3000">
      <van-swipe-item>
        <img v-lazy="swipeImg">
      </van-swipe-item>
      <van-swipe-item>
        <img v-lazy="swipeImg">
      </van-swipe-item>
      <van-swipe-item>
        <img v-lazy="swipeImg">
      </van-swipe-item>
    </van-swipe>

    <div class="home-intro">
      <div class="home-intro__wrap">
        <div class="x-intro-card"
             v-for="(item,index) in 18"
             :key="index">
        </div>
      </div>
    </div>

    <div class="home-shops">
      <h3 class="home-shops__title">
        店铺精选
      </h3>
      <p class="home-shops__intro">
        每日严选，好店不容错过。
      </p>
      <ul class="home-shops__list">
        <xShop v-for="(item,index) in 8"
               :key="index"
               tag="li" />
      </ul>
    </div>
  </section>
</template>

<script>
import xShop from '@/components/common/shop'
import swipeImg from '@/assets/images/home/bg.png'

export default {
  async asyncData ({ app }) {
    // await app.$axios.get('/public/staffList')
  },
  data () {
    return {
      swipeImg
    }
  },
  components: {
    xShop
  }
}
</script>

<style lang="scss">
@import "@/assets/css/common/var.scss";

.home {
  width: 100%;
  &-header {
    width: 100%;
    height: 370px;
    background: url("~/assets/images/home/header.png") no-repeat;
    background-size: 100% 100%;
    padding: 40px 30px 0;
    // margin-bottom: 26px;
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 23px;
    }
    &__brand {
      // width: 200px;
      height: 38px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    &__logo {
      width: 100px;
      height: 100%;
      background: url("~/assets/images/logo.png") no-repeat;
      background-size: 100% 100%;
      margin-right: 3px;
    }
    &__slogan {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      // font-weight: bold;
      p {
        margin: 0;
        font-size: 12px;
        color: #fff;
      }
    }
    &__sell {
      width: 108px;
      height: 34px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 17px;
      border: none;
      font-size: 14px;
      color: #fff;
    }
    &__search {
      padding: 15px;
      width: 100%;
      height: 44px;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 6px;
      margin-bottom: 20px;
      &--icon {
        width: 15px;
        height: 15px;
        margin-right: 6px;
      }
      &--text {
        font-size: 15px;
        color: #fff;
      }
    }
    &__tabs {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
    &__tab {
      width: 60px;
      height: 73px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      transition: background-color 0.2s;
      &:active {
        background-color: rgba(238, 238, 238, 0.2);
      }
      &--icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #eee;
      }
      &--text {
        font-size: 14px;
        color: #fff;
      }
    }
  }

  // 公告
  &-post {
    height: 13.5px;
    padding: 0 30px;
    margin-bottom: 20px;
    &__icon {
      width: 10px;
      height: 100%;
      margin-right: 4.5px;
    }
    &__text {
      font-size: 14px;
      color: #303133;
    }
  }

  .van-swipe {
    margin: 20px;
    // width: 100%;
    height: 80px;
    overflow: hidden;
    &__indicator {
      background-color: rgba(255, 255, 255, 0.5);
      &--active {
        background-color: #fff;
      }
    }
  }

  &-intro {
    // padding-left: 20px;
    width: 100%;
    height: 110px;
    overflow: hidden;
    // overflow-y: hidden;
    // overflow-x: scroll;
    // display: flex;
    // border: 1px solid #000;
    margin-bottom: 20px;
    &__wrap {
      // width: auto;
      // display: flex;
    }
    .x-intro-card {
      // width: 1000px;
      // display: inline-block;
      float: left;
      margin-right: 10px;
    }
  }

  &-shops {
    padding: 0 20px;
    &__title {
      font-size: 24px;
      color: #000;
      margin: 0 0 13px;
      font-weight: bold;
    }
    &__intro {
      font-size: 16px;
      color: #919399;
      margin-bottom: 30px;
    }
  }
}

// intro card
.x-intro-card {
  width: 180px;
  height: 90px;
  border-radius: 6px;
  box-shadow: 0 8px 20px rgba(0, 25, 76, 0.1);
}

// number board
.x-number-board {
  overflow: hidden;
  border: 1px solid #e8eaed;
  margin: 0 20px;
  border-radius: 6px;
  &__title {
    padding: 8px 10px;
    background: #f5f6fa;
    font-size: 14px;
    color: #8a8c99;
    border-bottom: 1px solid #e8eaed;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 60px;
    display: flex;
  }
  &__item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:not(:last-child) {
      border-right: 1px solid #e8eaed;
    }
    .value {
      font-size: 20px;
      color: #000;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .label {
      font-size: 12px;
      color: #8a8c99;
    }
  }
}

// more
.x-more {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 22px;
  &__item {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(255, 77, 77, 0.3);
    &:nth-child(2) {
      background-color: #ff4d4d;
    }
  }
}
</style>
