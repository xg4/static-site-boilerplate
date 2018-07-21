<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/about/news">About</router-link>
    </header>
    <section class="app-container">
      <transition name="routerView">
        <keep-alive :include="keepAlive">
          <router-view class="content" />
        </keep-alive>
      </transition>
    </section>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route (to, from) {
      // router transition
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'xg-slideOutLeft' : 'xg-slideInRight'

      // keep alive pages
      if (to.meta.keepAlive) {
        if (this.keepAlive.includes(to.meta.keepAlive)) return
        this.keepAlive.push(to.meta.keepAlive)
      }
    }
  },
  data () {
    return {
      keepAlive: [],
      transitionName: 'xg-slideOutLeft'
    }
  }
}
</script>

<style lang="scss">
.app-container {
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
