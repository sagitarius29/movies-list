<template>
    <div class="movies">
        <div class="movie" v-for="serie in series">
            <router-link :to="{name: 'series', params: {id: serie.id, cat_id: catId}}">
                <img :src="serie.cover">
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SeriesList",
    props: {
      series: {
        default() {
          return [];
        }
      },
      catId: {
        default: null
      }
    },
  }
</script>

<style scoped>

</style>
