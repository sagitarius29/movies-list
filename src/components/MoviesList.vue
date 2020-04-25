<template>
    <div class="movies">
        <div class="movie" v-for="movie in moviesComputed">
            <a :href="(movie.url === undefined || movie.url === '') ? '#' : movie.url">
                <img :src="movie.cover">
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MoviesList",
    props: {
      movies: {
        default() {
          return [];
        }
      },
      search: {
        default: ''
      }
    },
    computed: {
      moviesComputed() {
        if(!this.search) {
          return this.movies;
        }
        var regex = new RegExp(this.search,'i');

        return this.movies.filter((movie) => {
          return regex.test(movie.name);
        });
      }
    }
  }
</script>

<style scoped>

</style>
