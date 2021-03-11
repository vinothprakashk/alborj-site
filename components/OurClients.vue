<template>
  <div class="clients">
    <div class="container">
      <div class="clients-widget">
        <h2>Our Clients World Wide</h2>
        <img class="worker-bg" src="../assets/world_map.svg" alt="Globe">
        <div class="clients-widget-items">
          <div class="client-image-box">
            <img src="../assets/client.png" alt="client">
          </div>
          <div class="client-image-box">
            <img src="../assets/client.png" alt="client">
          </div>
          <div class="client-image-box">
            <img src="../assets/client.png" alt="client">
          </div>
          <div class="client-image-box">
            <img src="../assets/client.png" alt="client">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clients {
  --clients-title-font-size: #{size(24)};
  --clients-title-line-height: #{size(30)};
  --clients-padding: #{size(40)};

  @media screen and (min-width: $breakpoint-lg) {
    --clients-title-font-size: #{size(28)};
    --clients-title-line-height: #{size(32)};
    --clients-padding: #{size(120)};
  }

  width: 100%;
  padding: var(--clients-padding) 0;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background: url("../assets/90degree.svg") top right no-repeat;
    background-size: size(300);
    width: size(300);
    height: size(300);
    right: 0;
    top: 0;
    display: none;
    z-index: 0;
  }
  &:after {
    content: '';
    position: absolute;
    background: url("../assets/tri_angle.svg") bottom right no-repeat;
    background-size: contain;
    width: 100%;
    height: size(50);
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  &-widget {
    text-align: center;
    z-index: 1;
    h2 {
      font-size: var(--clients-title-font-size);
      line-height: var(--clients-title-line-height);
      font-weight: 700;
      margin-bottom: size(30);
      text-align: center;
    }
    img {
      max-width: 100%;
    }
    &-items {
      display: flex;
      flex-flow: row;
      column-gap: size(30);
      justify-content: space-between;
      .client-image-box {
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
        padding: size(5) size(5);
        text-align: center;
        background-color: var(--regular-text-inv);
        img {
          max-width: 100%;
        }
      }
    }
  }
  @media screen and (min-width: $breakpoint-md) {
    &:before {
      display: block;
    }
    &:after {
      height: size(150);
    }
    &-widget {
      h2 {
        margin-bottom: size(60);
      }
    }
  }
}
</style>

<script>
export default {
}
</script>
