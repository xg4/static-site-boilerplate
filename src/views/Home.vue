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
        <button class="home-header__sell">我要出售</button>
      </div>
      <div class="home-header__search">
        <i class="home-header__search--icon">x</i>
        <span class="home-header__search--text">请输入关键词进行搜索</span>
      </div>
      <ul class="home-header__tabs">
        <li class="home-header__tab"
            v-for="(item,index) in 8"
            :key="index">
          <i class="home-header__tab--icon"></i>
          <span class="home-header__tab--text">天猫网店</span>
        </li>
      </ul>
    </header>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
.home {
  width: 100%;
  &-header {
    width: 100%;
    height: 370px;
    background: url("../assets/images/home/header.png") no-repeat;
    background-size: 100% 104%;
    padding: 50px 30px 0;
    &__title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 23px;
    }
    &__brand {
      width: 200px;
      height: 38px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    &__logo {
      width: 100px;
      height: 100%;
      background: url("../assets/images/logo.png") no-repeat;
      background-size: 100% 100%;
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
      background: rgba(255, 255, 255, 0.15);
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
      margin: 0;
      padding: 0 22px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &__tab {
      width: 55px;
      height: 73px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      &:not(:nth-child(4n)) {
        margin-right: 30px;
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
}
</style>
