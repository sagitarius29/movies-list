<template>
    <div>
        <div class="header">
            <span class="header-back" @click="$router.back()"><i class="arrow left"></i></span> {{ serie.name }}
        </div>
        <div>
            <ul class="item-list">
                <li v-for="season in seasons"><router-link :to="{name: 'series.seasons', params: {serie_id: $route.params.id, id: season.id}}">{{ season.name }} <i class="arrow right"></i></router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SeasonsPage",
    data() {
      return {
        serie: {
          name: null
        },
        seasons: []
      }
    },
    mounted() {
      this.loadSeasons();
      this.loadSerie();
    },
    methods: {
      loadSeasons() {
        axios.get('series/'+this.$route.params.id+'/seasons?all=true').then(({data}) => {
          this.seasons = data;
        });
      },
      loadSerie() {
        axios.get('categories-series/'+this.$route.params.cat_id+'/series/' + this.$route.params.id).then(({data}) => {
          this.serie = data;
        });
      }
    }
  }
</script>

<style scoped>

</style>
