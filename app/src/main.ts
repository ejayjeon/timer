import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ls from './plugins/storage';
import store from './store';
import socket from './plugins/socket';
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(ls)
  .use(socket)
  .mount('#app');
