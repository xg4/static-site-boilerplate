<template>
  <main class="app">
    <!-- <header class="app-header">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/about/news">About</router-link>
    </header> -->

    <transition :name="transitionName">
      <keep-alive :include="keepAlive">
        <router-view class="app-container" />
      </keep-alive>
    </transition>

    <footer class="app-footer"></footer>
  </main>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route (to, from) {
      this.transitionName = 'routerViewEnter'
      // keep alive pages
      if (to.meta.keepAlive) {
        if (this.keepAlive.includes(to.meta.keepAlive)) {
          this.transitionName = 'routerViewLeave'
          return
        }
        this.keepAlive.push(to.meta.keepAlive)
      }
    }
  },
  data () {
    return {
      keepAlive: [],
      transitionName: 'routerViewEnter'
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  position: relative;
  &-container {
    position: absolute;
  }
}
</style>
