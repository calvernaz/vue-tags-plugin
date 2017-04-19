'use strict'

import VueTaggly from './VueTaggly.vue'

const VueTagglyPlugin = {
  install (Vue) {
    Vue.component('vue-taggly', VueTaggly)
  }
}

/**
 * When required globally
 */
if (typeof (window) !== 'undefined' && typeof (window.Vue) !== 'undefined') {
  window.Vue.use(VueTagglyPlugin)
}

export default VueTagglyPlugin
