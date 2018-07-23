<template>
  <div class="app">
    <header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/about/news">About</router-link>
    </header>
    <section class="app-container">
      <transition :name="transitionName">
        <keep-alive :include="keepAlive">
          <router-view class="app-router-view" />
        </keep-alive>
      </transition>
    </section>
    <footer></footer>
  </div>
</template>

<script>
const ROUTE_MAP = {}
let prevIndex = 0

export default {
  name: 'App',
  watch: {
    $route (to, from) {
      // router transition
      if (prevIndex === window.history.length) {
        // back
        ROUTE_MAP[to.path] = false
        this.transitionName = 'routerViewLeave'
      } else {
        // go
        prevIndex = window.history.length
        console.log(ROUTE_MAP[to.path])
        this.transitionName = ROUTE_MAP[to.path] ? 'routerViewLeave' : 'routerViewEnter'
        ROUTE_MAP[to.path] = true
      }
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'routerViewLeave' : 'routerViewEnter'

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
      transitionName: 'routerViewEnter'
    }
  }
}
</script>

<style lang="scss">
.app {
  &-container {
    position: relative;
  }
  &-router-view {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
