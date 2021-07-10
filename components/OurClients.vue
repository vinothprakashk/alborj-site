<template>
  <div class="clients">
    <div class="container">
      <div class="clients-widget">
        <h2>Our Clients World Wide</h2>
        <img class="worker-bg" src="../assets/united-arab-emirates.svg" alt="Globe">
        <div class="clients-widget-items owl-carousel">
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/ADPF - ABU DHABI.jpg" alt="ADPF - ABU DHABI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/ADYARD - ABU DHABI.jpg" alt="ADYARD - ABU DHABI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/AIRO LINK - DUBAI.png" alt="AIRO LINK - DUBAI.png">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/AKINS - DUBAI.png" alt="AKINS - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/AL FUTTAIM - DUBAI.jpg" alt="AL FUTTAIM - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/AL TAYER - DUBAI.png" alt="AL TAYER - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/ALEC - DUBAI.jpg" alt="ALEC - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/ALEMCO - DUBAI.jpg" alt="ALEMCO - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/AMANA - ABU DHABI.png" alt="AMANA - ABU DHABI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/BINGHATTI - DUBAI.jpg" alt="BINGHATTI - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img
                src="../assets/clients/CHINA STATE CONSTRUCTION ENGINEERING CORPORATION (CSCEC) -  DUBAI.png"
                alt="CHINA STATE CONSTRUCTION ENGINEERING CORPORATION (CSCEC) -  DUBAI"
              >
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/CROWN HOUSE - DUBAI.jpg" alt="CROWN HOUSE - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/DANWAY - DUBAI.jpg" alt="DANWAY - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/EVERSENDAI - DUBAI.png" alt="EVERSENDAI - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/JLW - DUBAI.png" alt="JLW - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/Laing O_Rourke - DUBAI.png" alt="Laing O_Rourke - DUBAI">
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img
                src="../assets/clients/UNIVERSAL VOLTAS - ABU DHABI.png"
                alt="UNIVERSAL VOLTAS - ABU DHABI"
              >
            </div>
          </div>
          <div class="client-widget-inner item">
            <div class="client-image-box">
              <img src="../assets/clients/ZENER STEWARD - DUBAI.png" alt="ZENER STEWARD - DUBAI">
            </div>
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
      .client-widget-inner {
        padding: size(5) size(15);
      }
      .client-image-box {
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
        padding: size(5) size(5);
        text-align: center;
        background-color: var(--regular-text-inv);
        min-height: size(210);
        display: flex;
        justify-items: center;
        min-width: size(210);
        img {
          max-width: 100%;
          max-height: size(210);
          object-fit: contain;
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
