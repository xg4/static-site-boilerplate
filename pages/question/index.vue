<template>
  <div>
    <section class="question-content">
      <textarea class="question-content__input"
                placeholder="请输入你所遇到的问题"></textarea>
      <van-button class="question-content__btn">提交</van-button>
    </section>

    <section class="question-list">
      <h3 class="question-list__title">
        <span>热门问题</span>
        <nuxt-link to="/question/hot"
                   class="question-list__title--more">
          更多
        </nuxt-link>
      </h3>
      <xQuestion v-for="(item,index) in 8"
                 :key="index" />
    </section>
  </div>
</template>

<script>
import xQuestion from '@/components/common/question'

export default {
  components: {
    xQuestion
  }
}
</script>

<style lang="scss">
@import "@/assets/css/common/var.scss";

.question {
  &-content {
    padding: 0 20px;
    margin-bottom: 60px;
    &__input {
      margin-top: 30px;
      padding: 20px;
      width: 100%;
      height: 120px;
      resize: none;
      border-radius: 4px;
      border: 1px solid #c6c7cc;
      box-shadow: 0 5px 8px rgba(25, 25, 51, 0.1);
      font-size: 14px;
      color: #333;
      margin-bottom: 20px;
      &::placeholder {
        color: #919399;
      }
    }
    &__btn {
      width: 260px;
      height: 45px;
      border-radius: 22px;
      background: $bg-left;
      font-size: 16px;
      color: #fff;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
