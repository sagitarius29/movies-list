import Vue from 'vue';
import MoviesComponent from "../components/MoviesComponent";
import VueRouter from "vue-router";
import axios from "axios";
import SeasonsPage from "../components/SeasonsPage";
import ChaptersPage from "../components/ChaptersPage";
import VideoPlayerPage from "../components/VideoPlayerPage";


Vue.use(VueRouter);

axios.defaults.baseURL = 'https://cpanels.us/api';

window.axios = axios;

const routes = [
  { path: '/', component: MoviesComponent },
  { path: '/videoplayer', component: VideoPlayerPage, name: 'videoplayer' },
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');
