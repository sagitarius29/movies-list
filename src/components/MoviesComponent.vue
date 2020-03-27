<template>
    <div>
        <Tabs v-if="categories.length > 0" @changePage="onChangePage">
            <Tab :label="category.name" :hash="category.name" v-for="(category, index) in categories" :key="index">
                <movies-list v-if="currentPage === index" :movies="category.movies"></movies-list>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
  import Tabs from './Tabs';
  import Tab from './Tab';
  import MoviesList from "./MoviesList";
  import axios from 'axios';

  const _ = require('lodash');

  export default {
    name: "MoviesComponent",
    components: {MoviesList, Tabs, Tab},
    data() {
      return {
        endpoint: 'https://cpanels.us/api',
        categories: [],
        currentPage: 0
      }
    },
    mounted() {
      this.loadCategories();
    },
    methods: {
      onChangePage(idx) {
        this.loadMovies(idx);
        setTimeout(() => {
          this.currentPage = idx;
        }, 250);
      },
      loadCategories() {
        axios.get(this.endpoint + '/categories?all=true').then(({data}) => {
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

        console.log('Loading Movies');

        axios.get(this.endpoint + '/categories/'+this.categories[idx].id+'/movies?all=true').then(({data}) => {
          this.categories[idx].movies = data;
        });
      }
    }
  }
</script>

<style scoped>

</style>
