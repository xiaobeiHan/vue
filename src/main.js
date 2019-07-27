// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import isf from 'xiaobeiutil'

import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

// const xiaobeihan = 'https://965d2f0aad1544b8b428e95879d20069@sentry.io/1502728'
const xiaobeihan1 = 'https://904f11f3456e4f18975d5cc70eb5e93f@sentry.io/1504759'
// const ebank = 'http://75c2cfb174a943f783d14fc4f06300e0@e.test.bank.ecitic.com/citiccard/sentry/6'
Sentry.init({
  dsn: xiaobeihan1,
  release: `foo4`,
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
