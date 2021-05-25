import { createApp } from 'vue';
import router from '@/router';
import App from './App';
// if you use vite plugin svg icons to open
// import 'vite-plugin-svg-icons/register';

createApp(App).use(router).mount('#app');
