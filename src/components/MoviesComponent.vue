<template>
    <div>
        <Tabs @changePage="onChangePage">
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
  export default {
    name: "MoviesComponent",
    components: {MoviesList, Tabs, Tab},
    data() {
      return {
        categories: window.categories,
        currentPage: 0
      }
    },
    methods: {
      onChangePage(idx) {
        setTimeout(() => {
          this.currentPage = idx;
        }, 250);
      }
    }
  }
</script>

<style scoped>

</style>
