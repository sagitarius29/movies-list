<template>
    <div>
        <div class="header">
            <span class="header-back" @click="$router.back()"><i class="arrow left"></i></span> {{ season.name }}
        </div>
        <div>
            <ul class="item-list">
                <li v-for="chapter in chapters"><a :href="chapter.url">{{ chapter.name }} <i class="arrow right"></i></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ChaptersPage",
    data() {
      return {
        season: {
          name: null
        },
        chapters: []
      }
    },
    mounted() {
      this.loadChapters();
      this.loadSeason();
    },
    methods: {
      loadChapters() {
        axios.get('seasons/'+this.$route.params.id+'/chapters?all=true').then(({data}) => {
          this.chapters = data;
        });
      },
      loadSeason() {
        axios.get('series/'+this.$route.params.serie_id+'/seasons/' + this.$route.params.id).then(({data}) => {
          this.season = data;
        });
      }
    }
  }
</script>

<style scoped>

</style>
