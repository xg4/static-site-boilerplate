<template>
  <div class="x-question">
    <div class="x-question__title">
      <span class="x-question__icon question">问</span>
      <p class="x-question__title--text">
        我的公司注册过女装，还可以注册母婴吗？
      </p>
    </div>
    <div class="x-question__content">
      <span class="x-question__icon answer">答</span>
      <p class="x-question__content--text">
        可以的亲，一个公司可以注册五个不同类目的店铺。比如女装，男装，母婴，美妆，食品，一样的类目
      </p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/css/mixins/index.scss";

.x-question {
  padding-top: 23px;
  padding-bottom: 25px;
  border-bottom: 1px solid #c7c6cc;
  width: 100%;
  &__title {
    display: flex;
    margin-bottom: 15px;
    &--text {
      flex: 1;
      @include multi-ellipsis(1);
      font-size: 16px;
      color: #000;
      font-weight: bold;
    }
  }
  &__content {
    display: flex;
    &--text {
      font-size: 14px;
      color: #616266;
      flex: 1;
      @include multi-ellipsis(2);
    }
  }
  &__icon {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    font-size: 12px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    &.question {
      background: linear-gradient(-120deg, #ff4c4c, #ff7559);
    }
    &.answer {
      background: linear-gradient(-120deg, #2891fa, #3ebfff);
    }
  }
}
</style>
