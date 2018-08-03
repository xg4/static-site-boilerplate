import Vue from 'vue'
import Vant, { Lazyload } from 'vant'

export default () => {
  Vue.use(Vant).use(Lazyload, {})
}
