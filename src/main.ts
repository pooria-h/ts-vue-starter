import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import router from './router';
import apolloClient from './ApolloClient';

const app = createApp(App);
app.provide(DefaultApolloClient, apolloClient);
app.use(createPinia());
app.use(router);

app.mount('#app');
