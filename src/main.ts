import { createApp } from 'vue-demi';
import App from './App.vue';
import Previewer from 'virtual:vue-component-preview';

const app = createApp(App);
app.use(Previewer);
app.mount('#app');
