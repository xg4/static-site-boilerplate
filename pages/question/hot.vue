<template>
  <div class="question-hot">
    <xQuestion v-for="(item,index) in 8"
               :key="index"></xQuestion>
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
.question-hot {
  background: #fff;
  padding-left: 20px;
}
</style>
