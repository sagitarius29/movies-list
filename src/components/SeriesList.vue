<template>
    <div class="movies">
        <div class="movie" v-for="serie in seriesComputed">
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
      },
      search: {
        default: ''
      }
    },
    computed: {
      seriesComputed() {
        var regex = new RegExp(this.search,'i');

        return this.series.filter((serie) => {
          return regex.test(serie.name);
        });
      }
    }
  }
</script>

<style scoped>

</style>
