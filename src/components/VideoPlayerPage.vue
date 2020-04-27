<template>
    <div>
        <div class="header">
            <span class="header-back" @click="$router.back()"><i class="arrow left"></i></span> Video Player
        </div>
        <div>
            <video :id="_uid + 'videoplayer'" @click="playVideo" style="width: 100%; height: calc(100% - 65px)" preload="none" :poster="$route.params.poster">
                <source :src="$route.params.url" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <img v-if="!playing" @click="playVideo" class="playbutton" src="play.png" alt="Play">
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
    data() {
      return {
        playing: false
      }
    },
    methods: {
      playVideo() {
        let video = document.getElementById(this._uid + 'videoplayer');
        video.play();
        this.playing = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
    .playbutton {
        width: 5em;
        height: 5em;
        position: absolute;
        margin-top: calc((50% + 65px) - 2.5em);
        left: calc(50% - 2.5em);
    }
</style>
