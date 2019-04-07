import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'eiga19',
  databaseURL: 'https://eiga19.firebaseio.com'
})

export const db = firebase.firestore()

/*Vue.use(Vuefire.firestorePlugin)
var db = firebase
.initializeApp({
  projectId: 'vue-fire-store',
  databaseURL: 'https://vue-fire-store.firebaseio.com',
})
.firestore()
db.settings({ timestampsInSnapshots: true })*/

new Vue({
  render: h => h(App),
}).$mount('#app')

