import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueSimpleAlert from "vue3-simple-alert";

const app = createApp(App)
app.use(VueSimpleAlert, {
  reverseButtons: true, // optional, default: false
  buttonsStyling: true, // optional, default: true
  customClass: '', // optional, default: ''
  confirmButtonText: 'OK', // optional, default: 'OK'
  cancelButtonText: 'Cancel', // optional, default: 'Cancel'
  showCloseButton: false, // optional, default: false
  showConfirmButton: true, // optional, default: true
  showCancelButton: false, // optional, default: false
  timer: null, // optional, default: null
  timerProgressBar: false, // optional, default: false
  allowOutsideClick: true, // optional, default: true
  allowEscapeKey: true, // optional, default: true
  allowEnterKey: true, // optional, default: true
  stopKeydownPropagation: false, // optional, default: false
});
app.mount('#app')
