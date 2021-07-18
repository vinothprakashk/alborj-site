<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
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
