import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';

const app = createApp(App);

axios.defaults.baseURL = process.env.VUE_APP_API;

app.mount('#app');
