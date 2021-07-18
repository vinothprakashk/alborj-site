<template>
  <div v-if="loading" class="loading-page">
    <div class="wow animate__zoomIn" data-wow-duration="1s" data-wow-iteration="10" data-transition-delay="1s">
      <Logo class="loader_logo" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
      // eslint-disable-next-line no-console
      console.log('finised')
    }
  }
}
</script>

<style lang="scss">
.loader_logo {
  height: size(150);
  path {
    fill: #fff;
  }
}
</style>
<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 99;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
  }
</style>
