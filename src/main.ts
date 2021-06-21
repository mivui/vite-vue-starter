import { createApp } from 'vue';
import router from '@/router';
import vuex from '@/store';
import App from './App';

createApp(App).use(router).use(vuex).mount('#app');
