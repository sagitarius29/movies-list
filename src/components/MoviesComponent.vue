<template>
    <div>
        <search-component v-model="search"/>
        <Tabs v-if="categories.length > 0" @changePage="onChangePage" @tabTouchStart="tabOnTouch()" @tabTouchEnd="tabOnEndTouch">
            <Tab :label="category.name" :hash="category.name" v-for="(category, index) in categories" :key="index">
                <movies-list v-show="moviesShow(index)" :movies="category.movies" :search="search"></movies-list>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
  import Tabs from './Tabs';
  import Tab from './Tab';
  import MoviesList from "./MoviesList";
  import axios from 'axios';
  import SearchComponent from "./SearchComponent";

  const _ = require('lodash');

  export default {
    name: "MoviesComponent",
    components: {SearchComponent, MoviesList, Tabs, Tab},
    data() {
      return {
        onTouch: false,
        endpoint: 'https://cpanels.us/api',
        categories: [],
        currentPage: 0,
        search: ''
      }
    },
    mounted() {
      this.loadCategories();
    },
    methods: {
      tabOnTouch() {
        this.onTouch = true;
      },
      tabOnEndTouch() {
        this.onTouchEndDebounced(this);
      },
      onTouchEndDebounced: _.debounce((vm) => {
        vm.onTouch = false;
        console.log('onEndTouch');
      }, 300),
      moviesShow(index) {
        if(this.currentPage === index) {
          return true;
        } else if(this.onTouch && this.currentPage > 0 && index === this.currentPage - 1) {
          return true;
        } else if(this.onTouch && this.currentPage < this.categories.length - 1 && index === this.currentPage + 1) {
          return true;
        }
        return false;
      },
      onChangePage(idx) {
        this.loadMovies(idx);
        setTimeout(() => {
          this.currentPage = idx;
        }, 250);
        this.search = '';
      },
      loadCategories() {
        axios.get(this.endpoint + '/categories?all=true&sort=order|asc').then(({data}) => {
          this.categories = _.forEach(data, (item) => {
            item.movies = [];
            return item;
          });
        });
      },
      loadMovies(idx) {
        if(this.categories[idx].movies.length > 0) {
          return false;
        }
        axios.get(this.endpoint + '/categories/'+this.categories[idx].id+'/movies?all=true').then(({data}) => {
          this.categories[idx].movies = data;
        });
      }
    }
  }
</script>

<style scoped>

</style>
