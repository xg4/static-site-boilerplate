<template>
  <div class="x-help-feedback">
    <p class="x-help-feedback__intro">以上内容是否解决了您的问题呢？</p>
    <div class="x-help-feedback__group">
      <van-button type="primary">是的 已经解决</van-button>
      <van-button type="danger">没有 联系客服</van-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.x-help-feedback {
  width: 100%;
  height: 155px;
  border-radius: 4px;
  background-color: #f5f6fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__intro {
    font-size: 14px;
    color: #797a80;
    margin-bottom: 20px;
  }
  &__group {
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    .van-button {
      width: 140px;
      height: 100%;
      border-radius: 20px;
    }
  }
}
</style>
