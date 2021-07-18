<template>
  <div :class="['banner', onlyContent ? 'only-content': '', customClass]">
    <div class="container">
      <div class="banner-inner">
        <div class="banner-inner-left">
          <h1>{{ title }}</h1>
          <p>
            {{ description }}
          </p>
        </div>
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

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Who we are'
    },
    description: {
      type: String,
      default: 'Al Borj Group  is one of the reputed manpower supply and MEP subcontracting company in UAE'
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  background: url('../assets/sub/service1.png') #3aa6cd;
  background-size: cover;
  background-position: center center;
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
  &.only-content {
    background: #3aa6cd;
    .banner-inner {
      min-height: 0;
      &-box {
        display: none;
      }
      &-left {
        padding: size(150) 0 size(80) 0;
        position: relative;
        top: auto;
        transform: none;
        display: flex;
        flex-flow: column;
      }
    }
    &.joinus {
      background: url('../assets/sub/join_us.png') #3aa6cd;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      &:before {
        background-color: #1919194a;
      }
    }
    &.services {
      background: url('../assets/sub/service_bg.png') #3aa6cd;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      &:before {
        background-color: #ffffff91;
      }
      .banner-inner-left {
        color: #333;
        p {
          color: #3a3a3a;
        }
      }
    }
  }
  &-inner {
    min-height: size(330);
    position: relative;
    display: flex;
    &-left {
      display: none;
      color: #fff;
      padding: size(90) 0 size(40) 0;
      h1 {
        font-size: size(42);
        margin-bottom: size(25);
        font-weight: bold;
        text-transform: capitalize;
      }
      p {
        font-size: size(18);
        line-height: size(24);
        color: #d9d9d9;
      }
    }
    &-box {
      position: absolute;
      bottom: size(20);
      right: size(20);
      padding: size(15);
      // background-color: rgba(116,157,123,0.65);
      max-width: size(200);
      color: #fff;
      font-size: size(12);
      line-height: 1.3;
      .author {
        display: block;
        font-weight: 500;
        font-style: italic;
        text-align: center;
        font-size: 80%;
        color: #dcdcdc;
      }
    }
  }
  @media screen and (min-width: $breakpoint-md) {
    &-inner {
      min-height: size(500);
      h1 {
        font-size: size(60);
      }
      &-left {
        display: flex;
        flex-flow: column;
      }
      &-box {
        padding: size(30);
        max-width: size(350);
        font-size: size(14);
      }
    }
  }
  @media screen and (min-width: $breakpoint-lg) {
    &-inner {
      &-left {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        color: #fff;
        padding-top: 0;
        max-width: 50%;
      }
    }
  }
}
</style>
