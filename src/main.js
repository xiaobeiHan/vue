// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import isf from 'xiaobeiutil'

import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

Sentry.init({
  dsn: 'https://965d2f0aad1544b8b428e95879d20069@sentry.io/1502728',
  release: `projectname${require('../package.json').version || new Date().getTime()}`,
  environment: 'uat',
  maxBreadcrumbs: 50,
  integrations: [new Integrations.Vue({Vue, attachProps: true})]
})



Vue.prototype.Sentry = Sentry

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
