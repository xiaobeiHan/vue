<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links1662</h2>
    <button @click="sendSentry">sendSentry</button>
    <button @click="sendAnotherSentry">sendAnotherSentry</button>
    <button @click="sendEvent">sendEvent</button>
    <input @input="sendEvent"/>
  </div>
</template>

<script>
// import isFunc from "xiaobeiutil"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    sendSentry () {
      this.Sentry.withScope(scope => {
        scope.setFingerprint(['group9'])
        this.Sentry.setTag('tagName', 'myNewTag')
        this.Sentry.setExtras({
          name: 'xiaobei',
          date: '20190715'
        })
        this.Sentry.captureException(
          new Error('firstException group9')
        )
      })
    },
    sendAnotherSentry () {
      this.Sentry.withScope(scope => {
        scope.setFingerprint(['group1'])
        this.Sentry.setTag('tagName', 'myNewTag')
        this.Sentry.setExtras({
          name: 'xiaobei',
          date: '20190715'
        })
        this.Sentry.captureException(
          new Error('new Error1 group1')
        )
      })
    },
    sendEvent () {
      this.Sentry.withScope(scope => {
        this.Sentry.captureEvent(
          {
            fingerprint: ['group1'],
            message: 'firstEventMsg group1',
            level: 'info',
            tags: {
              myeame: 'xiaobeiEvent',
              myType: 'event'
            },
            extra: {
              dowhat: 'drinkWater',
              eatwhat: 'dontknow'
            }
          }
        )
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
