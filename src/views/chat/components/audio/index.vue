<template>
  <div class="outcall-player">
    <call-player
      ref="playerBtn"
      :duration="duration"
      :url="url"
      :is-self="isSelf"
      :convert-txt="convertTxt"
      @play="handlePlay"
      @close="handleClose"
    />
    <audio
      ref="player"
      :src="url"
    />
  </div>
</template>

<script>
import CallPlayer from './audio.vue';
export default {
  name: 'OutcallPlayer',
  components: {
    CallPlayer
  },
  props: {
    uId: {
      type: String,
      default: ''
    },
    duration: {
      type: [String, Number],
      default: 0
    },
    isSelf: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: 'https://www.w3school.com.cn/i/horse.ogg'
    },
    convertTxt: {
      type: String,
      default: '--'
    }
  },
  data() {
    return {
      playing: false,
      audio: undefined,
    }
  },
  watch: {
  },
  mounted() {
    this.audio = this.$refs.player;
    this.init();
  },
  methods: {
    handlePlay() {
      // 先结束之前的录音
      // if (this.uId !== id) {
      //   this.handleClose();
      //   this.$refs.playerBtn.isPlay = false;
      // }
      this.play();
    },
    handleClose() {
      this.stop();
    },
    stop() {
      this.playing = false
      this.audio.pause()
    },
    play() {
      if (this.playing) return
      this.audio.play();
      this.playing = true
    },
    handleEnded() {
      this.playing = false;
      this.$refs.playerBtn.isPlay = false;
    },
    handlePlayPause() {
      this.audio.currentTime = 0;
    },
    init() {
      this.audio.addEventListener('ended', this.handleEnded);
      this.audio.addEventListener('play', this.handlePlayPause);
      this.audio.addEventListener('pause', this.handlePlayPause);
    },
  }
}
</script>

<style lang="less" scoped>
.outcall-player {
  width: 100%;
}
</style>
