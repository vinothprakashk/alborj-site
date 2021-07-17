<template>
  <div class="services">
    <div class="container">
      <div class="services-inner">
        <div class="services-inner-left">
          <h2>What We Do</h2>
        </div>
        <div class="services-inner-group">
          <div class="wow animate__fadeInLeft" data-wow-duration="2s">
            <span class="img-placeholder" />
            <span class="title">Reliable Solution for Manpower</span>
            <span>We provide high-quality workers at the best price in the market. While we take care of your manpower needs, you can focus on your core business.</span>
          </div>
          <div class="wow animate__fadeInUp" data-wow-duration="2s">
            <span class="img-placeholder" />
            <span class="title">Sub Contract for MEP</span>
            <span>Our aim is to provide the best service to our clients through our qualified management personnel and site operatives alike.</span>
          </div>
          <div class="wow animate__fadeInRight" data-wow-duration="2s">
            <span class="img-placeholder" />
            <span class="title">Your Trustable Partner</span>
            <span>Reach us anytime to get your manpower based on your requirements on demand.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services {
  --blog-font-size: #{size(12)};
  --blog-line-height: #{size(16)};

  --services-title-font-size: #{size(24)};
  --services-title-line-height: #{size(30)};

  --services-subtitle-font-size: #{size(16)};
  --services-subtitle-line-height: #{size(20)};

  --services-content-font-size: #{size(14)};
  --services-content-line-height: #{size(18)};

  @media screen and (min-width: $breakpoint-lg) {
    --services-title-font-size: #{size(32)};
    --services-title-line-height: #{size(36)};

    --services-subtitle-font-size: #{size(18)};
    --services-subtitle-line-height: #{size(24)};

    --services-content-font-size: #{size(16)};
    --services-content-line-height: #{size(20)};

    --blog-font-size: #{size(16)};
    --blog-line-height: #{size(20)};
  }
  position: relative;
  background-color: #f5f5f5;
  &-inner {
    padding: size(30) 0;
    &-left {
      text-align: center;
      margin-bottom: size(20);
      h2 {
        font-size: var(--services-title-font-size);
        line-height: var(--services-title-line-height);
        font-weight: 700;
        font-weight: normal;
        margin-bottom: size(15);
        text-align: center;
        position: relative;
        display: inline-block;
        padding-bottom: size(5);
        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 100%;
          width: 70%;
          height: size(4);
          background: var(--secondary-bg);
          margin: 0 auto;
        }
      }
      p {
        font-size: var(--services-content-font-size);
        line-height: var(--services-content-line-height);
      }
    }
    @media screen and (min-width: $breakpoint-md) {
      background: url("../assets/services/bg_shape.png") transparent no-repeat;
      background-position: bottom size(28) right 0;
      background-size: size(400);
      padding-bottom: size(100);
      &-left {
        text-align: left;
        h2 {
          text-align: left;
          &:after {
            margin: 0;
          }
        }
      }
      &-group {
        max-width: 90%;
      }
    }
    &-group {
      display: flex;
      flex-wrap: wrap;
      flex-grow: 1;
      > div {
        flex-grow: 1;
        text-align: center;
        margin: 0 auto size(20) auto;
        max-width: size(250);
        background-color: var(--regular-text-inv);
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.12);
        transition: all 0.3s ease-in-out;
        .img-placeholder {
          width: 100%;
          height: size(150);
          background-image: url("../assets/services/contract.png");
          background-size: cover;
        }
        span {
          display: block;
          text-align: left;
          font-size: var(--blog-font-size);
          line-height: var(--blog-line-height);
          margin: 0 auto;
          &:not(.title) {
            color: #5a5a5a;
          }
          &.title {
            font-size: var(--services-subtitle-font-size);
            line-height: var(--services-subtitle-line-height);
            font-weight: bold;
            margin: 0;
          }
          &.img-placeholder {
            margin-top: 0;
          }
          &:not(.img-placeholder) {
            padding: size(5) size(10) size(10) size(10);
          }
          @media screen and (min-width: $breakpoint-md) {
            // max-width: size(110);
            margin: size(10) auto;
          }
        }
        &:hover {
          background-color: #f5f5f5;
          color: var(--regular-text)
        }
        &:nth-child(2) {
          .img-placeholder {
            background-image: url("../assets/services/subcontract.png");
          }
        }
        &:nth-child(3) {
          .img-placeholder {
            background-image: url("../assets/services/trust.png");
          }
        }
      }
      @media screen and (min-width: $breakpoint-md) {
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
        column-gap: 3%;
        flex-wrap: inherit;
        > div {
          max-width: size(350);
          margin: 0;
          flex-basis: 30%;
        }
      }
    }
  }
}
</style>
