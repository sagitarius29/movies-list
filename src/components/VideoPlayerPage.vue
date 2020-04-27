<template>
    <div>
        <div class="header">
            <span class="header-back" @click="$router.back()"><i class="arrow left"></i></span> Video Player
        </div>
        <div>
            <video style="width: 100%" height="100%" controls autoplay :poster="$route.params.poster">
                <source :src="$route.params.url" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>

<script>
  export default {
    name: "VideoPlayerPage",
    props: {
      url: {
        default: null
      }
    },
    mounted() {
      console.log(this.$route.params.url);
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
