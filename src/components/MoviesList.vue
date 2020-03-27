<template>
    <div class="movies">
        <div class="movie" v-for="movie in movies">
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
      }
    }
  }
</script>

<style scoped>

</style>
