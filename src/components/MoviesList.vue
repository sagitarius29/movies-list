<template>
    <div class="movies">
        <div class="movie" v-for="movie in moviesComputed">
            <router-link v-if="ifRedirect(movie.url)" :to="{name: 'videoplayer', params: {url: movie.url, poster: movie.cover}}">
                <img :src="movie.cover">
            </router-link>
            <a v-else :href="(movie.url === undefined || movie.url === '') ? '#' : movie.url">
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
      },
    },
    methods: {
      ifRedirect(url) {
        var detectMkv = new RegExp('\.mkv$','i');
        return detectMkv.test(url);
      }
    }
  }
</script>

<style scoped>

</style>
