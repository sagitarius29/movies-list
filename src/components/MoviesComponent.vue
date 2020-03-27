<template>
    <div>
        <Tabs v-if="categories.length > 0" @changePage="onChangePage">
            <Tab :label="category.name" :hash="category.name" v-for="(category, index) in categories" :key="index">
                <movies-list v-if="moviesShow(index)" :movies="category.movies"></movies-list>
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
      moviesShow(index) {
        console.log(this.currentPage < this.currentPage.length - 1, index === this.currentPage + 1);
        if(this.currentPage === index) {
          return true;
        } else if(this.currentPage > 0 && index === this.currentPage - 1) {
          return true;
        } else if(this.currentPage < this.categories.length - 1 && index === this.currentPage + 1) {
          return true;
        }
        return false;
      },
      onChangePage(idx) {
        this.loadMovies(idx);
        setTimeout(() => {
          this.currentPage = idx;
        }, 250);
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
