<template>
    <div>
        <div class="header">
            <span class="header-back" @click="$router.back()"><i class="arrow left"></i></span> {{ season.name }}
        </div>
        <div>
            <ul class="item-list">
                <li v-for="chapter in chapters">
                    <router-link v-if="ifRedirect(chapter.url)" :to="{name: 'videoplayer', params: {id: chapter.id, url: chapter.url, poster: season.serie.cover}}">{{ chapter.name }} <i class="arrow right"></i></router-link>
                    <a v-else :href="chapter.url">{{ chapter.name }} <i class="arrow right"></i></a>
                </li>
                <!--<li v-for="chapter in chapters"><a :href="chapter.url">{{ chapter.name }} <i class="arrow right"></i></a></li>-->
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
        axios.get('series/'+this.$route.params.serie_id+'/seasons/' + this.$route.params.id + '?withRelation=serie').then(({data}) => {
          this.season = data;
        });
      },
      ifRedirect(url) {
        var detectMkv = new RegExp('\.mkv$','i');
        return detectMkv.test(url);
      }
    }
  }
</script>

<style scoped>

</style>
