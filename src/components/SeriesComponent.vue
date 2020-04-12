<template>
    <div>
        <Tabs v-if="categories.length > 0" @changePage="onChangePage" @tabTouchStart="tabOnTouch()" @tabTouchEnd="tabOnEndTouch">
            <Tab :label="category.name" :hash="category.name" v-for="(category, index) in categories" :key="index">
                <series-list v-show="seriesShow(index)" :series="category.series" :cat-id="category.id"></series-list>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
  import Tabs from './Tabs';
  import Tab from './Tab';
  import axios from 'axios';
  import SeriesList from "./SeriesList";

  const _ = require('lodash');

  export default {
    name: "SeriesComponent",
    components: {SeriesList, Tabs, Tab},
    data() {
      return {
        onTouch: false,
        categories: [],
        currentPage: 0
      }
    },
    mounted() {
      this.loadCategories();
    },
    methods: {
      tabOnTouch() {
        this.onTouch = true;
        console.log('onTouch');
      },
      tabOnEndTouch() {
        this.onTouchEndDebounced(this);
      },
      onTouchEndDebounced: _.debounce((vm) => {
        vm.onTouch = false;
        console.log('onEndTouch');
      }, 300),
      seriesShow(index) {
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
      },
      loadCategories() {
        axios.get('/categories-series?all=true&sort=order|asc').then(({data}) => {
          this.categories = _.forEach(data, (item) => {
            item.series = [];
            return item;
          });
        });
      },
      loadMovies(idx) {
        if(this.categories[idx].series.length > 0) {
          return false;
        }
        axios.get('/categories-series/'+this.categories[idx].id+'/series?all=true').then(({data}) => {
          this.categories[idx].series = data;
        });
      }
    }
  }
</script>

<style scoped>

</style>
