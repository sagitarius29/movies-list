<template>
    <div class="movies">
        <div class="movie" v-for="movie in movies">
            <a :href="(movie.movie === undefined || movie.movie === '') ? '#' : movie.movie">
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
      }
    }
  }
</script>

<style scoped>

</style>
