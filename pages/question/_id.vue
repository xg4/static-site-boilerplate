<template>
  <div>
    <div class="question-detail">
      <h2 class="question-detail__title">
        我的公司注册过女装，还可以注册母婴吗？
      </h2>
      <div class="question-detail__content">
        可以的亲，一个公司可以注册五个以的亲，一个公司可以注册五个以的亲，一个公司可以注册五个以的亲，一个公司可以注册五个以的亲，一个公司可以注册五个以的亲，一个公司可以注册五个以的亲，一个公司可以注册五个以的亲，一个公司可以注册五个
      </div>
    </div>

    <section class="question-list">
      <h3 class="question-list__title">
        <span>此客服回答的其他问题</span>
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
.question-detail {
  padding: 0 20px;
  margin-bottom: 30px;
  &__title {
    margin: 40px 0 0;
    font-size: 24px;
    margin-bottom: 27px;
    color: #303133;
  }
  &__content {
    width: 100%;
    box-shadow: 0 5px 8px rgba(25, 25, 51, 0.1);
    background: #fff;
    padding: 20px;
    font-size: 16px;
    color: #303133;
    line-height: 1.5;
    border-radius: 2px;
    border: 1px solid #ff4c4c;
    position: relative;
    &::before {
      position: absolute;
      top: -20px;
      left: 25px;
      content: " ";
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent red transparent;
    }
  }
}
</style>
