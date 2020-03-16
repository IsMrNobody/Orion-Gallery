<template>
  <div ref="lavContainer" :style="style"></div>
</template>

<script>
import lottie from 'lottie-web'
export default {
  props: {
    options: {
      type: Object,
      required: true,
      height: Number,
      width: Number
    }
  },

  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '80%',
        height: this.height ? `${this.height}px` : '80%',
        overflow: 'hidden',
        margin: '0 auto'
      }
    }
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData.default,
      rendererSettings: this.options.rendererSettings
    })
    this.$emit('animCreated', this.anim)
  }
}
</script>
