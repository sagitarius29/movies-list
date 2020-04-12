import Vue from 'vue';

import VueRouter from 'vue-router'
import SeriesComponent from "../components/SeriesComponent";
import axios from 'axios';
import SeasonsPage from "../components/SeasonsPage";
import ChaptersPage from "../components/ChaptersPage";

Vue.use(VueRouter);

axios.defaults.baseURL = 'https://cpanels.us/api';

window.axios = axios;

const routes = [
  { path: '/', component: SeriesComponent },
  { path: '/category/:cat_id/series/:id', component: SeasonsPage, name: 'series' },
  { path: '/series/:serie_id/seasons/:id', component: ChaptersPage, name: 'series.seasons' },
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');
