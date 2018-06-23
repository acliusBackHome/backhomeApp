import * as firebase from 'firebase'
import config from './config.js'
firebase.initializeApp(config)
export default {
  install (Vue, options) {
    Vue.prototype.$firebase = firebase
  }
}
