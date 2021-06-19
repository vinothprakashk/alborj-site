<template>
  <div class="banner">
    <div class="container">
      <div class="banner-inner">
        <div class="banner-inner-box">
          <p>
            I believe in the Dignity of Labor, They build the DNA of each construction to complete in success for what our eyes saw
            <span class="author">- Joseph Silvacruz, Managing Director of Al Borj Group UAE</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background: url('../assets/sub/service1.png') #43A0A6;
  background-size: contain;
  background-position: bottom left;
  background-repeat: no-repeat;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #43A0A68F;
  }
  &-inner {
    min-height: size(330);
    position: relative;
    display: flex;
    &-box {
      position: absolute;
      bottom: size(20);
      right: size(20);
      padding: size(15);
      background-color: rgba(116,157,123,0.85);
      max-width: size(200);
      color: #DFFF1C;
      font-size: size(16);
      line-height: 1.5;
      .author {
        display: block;
        font-weight: 500;
        font-style: italic;
        text-align: center;
        font-size: 80%;
      }
    }
  }
  @media screen and (min-width: $breakpoint-md) {
    &-inner {
      min-height: size(500);
      &-box {
        padding: size(30);
        max-width: size(350);
        font-size: size(24);
      }
    }
  }
}
</style>
