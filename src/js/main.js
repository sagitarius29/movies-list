import Vue from 'vue';
import MoviesComponent from "../components/MoviesComponent";

Vue.component('MoviesComponent', MoviesComponent);

new Vue().$mount('#app');
