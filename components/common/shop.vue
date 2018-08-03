<template>
  <router-link :tag="tag"
               to="/"
               class="x-shop">
    <img class="x-shop__img"
         v-lazy="''">
    <div class="x-shop__content">
      <h4 class="x-shop__name">
        华中地区 流行男鞋 旗舰店 无扣分
      </h4>
      <div class="x-shop__types">
        <p class="x-type"
           v-for="(item,index) in types"
           :key="index">
          <span class="x-type__label">{{item.label}}</span>
          <span class="x-type__value">{{item.value}}</span>
        </p>
      </div>
      <div class="x-shop__more">
        <div class="x-shop__tags">
          <span class="x-shop__tag"
                :style="{backgroundColor:tagColor(0)}">独家</span>
          <span class="x-shop__tag"
                :style="{backgroundColor:tagColor(1)}">免费看店</span>
        </div>

        <span class="x-shop__price">￥50000</span>
      </div>
    </div>
  </router-link>
</template>

<script>
const TAG_COLOR_MAP = {
  0: '#7a7a99',
  1: '#bfa873'
}

export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  data () {
    return {
      types: [
        {
          label: '类目：',
          value: '服饰鞋包'
        }, {
          label: '类型：',
          value: '旗舰店'
        }, {
          label: '商标：',
          value: 'R标'
        }
      ]
    }
  },
  methods: {
    tagColor (type) {
      return TAG_COLOR_MAP[type]
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/mixins/index.scss";

.x-shop {
  height: 90px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c6c7cc;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &__img {
    width: 70px;
    height: 70px;
    border-radius: 6px;
    box-shadow: 0 8px 20px rgba(0, 25, 76, 0.1);
  }
  &__content {
    width: 280px;
    // width: 100%;
    // flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__name {
    width: 100%;
    margin: 0;
    font-size: 17px;
    color: #000;
    @include ellipsis();
  }
  &__types {
    display: flex;
    // justify-content: space-between;
    align-items: center;
  }
  &__more {
    display: flex;
    justify-content: space-between;
  }
  &__tag {
    font-size: 10px;
    color: #fefeff;
    border-radius: 8px;
    padding: 2px 6px;
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
  &__price {
    font-size: 17px;
    color: #ff4c4c;
  }
  .x-type {
    margin: 0;
    font-size: 12px;
    &:not(:last-child) {
      margin-right: 5px;
    }
    &__label {
      color: #797a80;
    }
    &__value {
      color: #303133;
    }
  }
}
</style>
