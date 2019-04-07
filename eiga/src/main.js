import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'eiga19',
  databaseURL: 'https://eiga19.firebaseio.com'
})

export const db = firebase.firestore()

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log(VueFire)

