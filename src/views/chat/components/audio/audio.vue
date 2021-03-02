<!--
说明：语音播放组件
待修改
功能： 语音播放动画展示
长按转文字交互
-->
<template>
  <div
    class="call-player-all"
    @click="isPressed = false"
  >
    <div
      ref="callPlayer"
      class="call-player"
      :style="`justify-content:${isSelf ? ' flex-end':'flex-start'}`"
    >
      <div
        :class="['voice-self','bg_main']"
        :style="{'--background': '#09f','--width':`${duration+90}px`}"
        @click="handleClick"
        @dblclick="handlePress"
      >
        <div
          v-if="isPressed"
          class="call-player_notice"
          @click.stop="isPressed = false;showConvertTxt=true;"
        >
          转文字
        </div>
        <template v-if="isSelf">
          {{ 3 }}″
        </template>
        <div
          :class="['bg-blue',
                   'bg-green',
                   'voicePlay']"
        />
        <template v-if="!isSelf">
          {{ 3 }}″
        </template>
      </div>
    </div>
    <div
      v-if="showConvertTxt"
      class="call-player"
      :style="`justify-content:${isSelf ? ' flex-end':'flex-start'}`"
    >
      <div class="call-player-transform">
        {{ convertTxt || '--' }}
        <div class="call-player-transform_notice">
          转换完成
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CallPlayer',
  props: {
    isSelf: {
      type: Boolean,
      default: false
    },
    duration: {
      type: [String, Number],
      default: 3
    },
    url: {
      type: String,
      default: ''
    },
    convertTxt: {
      type: String,
      default: '123'
    }
  },
  emits: ['play', 'close'],
  data() {
    return {
      isPlay: false,
      isPressed: false,
      showConvertTxt: false
    }
  },
  computed:{
  },
  watch: {
    url() {
      this.isPressed = false;
    }
  },
  mounted() {
    this.$refs.callPlayer.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  },
  methods: {
    handleClick() {
      if (!this.url) {
        this.$toast('获取音频失败');
        return
      }
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.$emit('play');
        return
      }
      this.$emit('close');

    },
    onClickOutside() {
      this.isPressed = false;
    },
    /**
     * 长按
     */
    handlePress() {
      setTimeout(() => {
        this.isPressed = true;
        if (this.url !== valueKey) {
          this.isPressed = false;
        }
      }, 500)
    },
  }
}
</script>
<style lang="less">
.call-player-all {
  position: relative;

  .call-player_notice {
    position: absolute;
    top: -28px;
    width: 60px;
    height: 24px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    background: #000;
    border-radius: 8px 8px 0 8px;
    opacity: 0.9;
  }

  .call-player-transform {
    width: fit-content;
    min-width: 130px;
    max-width: calc(100vw - 100px);
    padding: 12px 20px;
    margin: -8px 10px 20px;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    background: rgba(230, 230, 230, 1);
    border-radius: 20px;

    &_notice {
      img {
        position: relative;
        top: 5px;
        width: 20px;
      }

      font-size: 12px;
      line-height: 12px;
      color: rgba(153, 153, 153, 1);
    }
  }

  .call-player {
    display: flex;
    justify-content: flex-end;

    .voice-opposite {
      display: flex;
      width: var(--width);
      height: 48px;
      margin: 0 10px 20px;
      line-height: 48px;
      color: #333;
      text-align: center;
      background: #fff;
      border-radius: 0 15px 15px;
    }

    .voice-self {
      display: flex;
      justify-content: flex-end;
      width: var(--width);
      height: 48px;
      margin: 0 10px 20px;
      line-height: 48px;
      color: #fff;
      text-align: center;
      // background: #00CD91;
      border-radius: 15px 0 15px 15px;
    }

    .bg-blue,
    .bg-white {
      width: 24px;
      height: 24px;
      margin: auto 15px;
      margin-right: 20px;
      background-size: 400%;
    }

    .bg-blue {
      background: blue;
    }

    .bg-green {
      background: green;
    }

    .bg-white {
      background:white;
    }

    .voicePlay-reverse {
      animation-name: voicePlay-reverse;
      animation-duration: 1s;
      animation-timing-function: steps(3);
      animation-iteration-count: 100;
      animation-direction: normal;
    }

    @keyframes voicePlay-reverse {
      0% {
        background-position: 100%;
      }

      100% {
        background-position: 0;
      }
    }

    .voicePlay {
      animation-name: voicePlay;
      animation-duration: 1s;
      animation-timing-function: steps(3);
      animation-iteration-count: 100;
      animation-direction: normal;
    }

    @keyframes voicePlay {
      0% {
        background-position: 0;
      }

      100% {
        background-position: 100%;
      }
    }
  }
}
</style>
