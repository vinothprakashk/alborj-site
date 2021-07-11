<template>
  <div class="choose">
    <div class="container">
      <div class="choose-widget">
        <h2>Why Choose Us</h2>
        <div class="choose-widget-group">
          <div class="group">
            <div class="group-item wow animate__fadeInDown" data-wow-duration="2s">
              <h5>EXPERIENCE IN THIS FIELD</h5>
              <p>Established in 2002, Being an expert in the manpower and subcontracting field, we know what exactly you want. Our expert team will take care of 100% successful mobilization procedures.</p>
            </div>
            <div class="group-item wow animate__fadeInLeft" data-wow-duration="2s">
              <h5>PRIORITY OF OUR WORKER'S HSEQ </h5>
              <p>Compliance with Safety standards, regulations, and quality. Al Borj Group Employment Services drive a strong HSEQ culture amongst its employees through a comprehensive Quality and HSE Policy and Strategy leading to Zero Harm and Customer Satisfaction. Group life insurance covering worldwide and health insurance covering UAE.</p>
            </div>
            <div class="group-item wow animate__fadeInUp" data-wow-duration="2s">
              <h5>COST-EFFECTIVENESS</h5>
              <p>We provide high-quality workers at the best price in the market. It is operational and covers a broad spectrum of activities with experienced professionals and a highly qualified administration team who always proved in taking the most exacting jobs and in producing perfect results.</p>
            </div>
          </div>
          <div class="group">
            <div class="group-item wow animate__fadeInDown" data-wow-duration="2s">
              <h5>MANPOWER FOR SHORT OR LONG TERM</h5>
              <p>We can meet your immediate short or long-term manpower requirements according to your needs with the utmost professionalism. </p>
            </div>
            <div class="group-item wow animate__fadeInUp" data-wow-duration="2s">
              <h5>AVAILABILITY OF LARGE SCALE OF WORKERS</h5>
              <p>We are well capable of providing a large scale of skilled and semi-skilled workers from different countries like India, Pakistan, Nepal, and Bangladesh.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.choose {
  --choose-title-font-size: #{size(24)};
  --choose-title-line-height: #{size(30)};

  --choose-padding: #{size(40)};
  --choose-group--padding-top: #{size(40)};

  --group--title--font-size: #{size(16)};
  --group--title--line-height: #{size(20)};

  --group-desc-font-size: #{size(14)};
  --group-desc-line-height: #{size(18)};

  @media screen and (min-width: $breakpoint-lg) {
    --choose-title-font-size: #{size(36)};
    --choose-title-line-height: #{size(40)};

    --choose-group--padding-top: #{size(80)};
    --group--title--font-size: #{size(18)};
    --group--title--line-height: #{size(24)};

    --group-desc-font-size: #{size(16)};
    --group-desc-line-height: #{size(20)};
  }

  width: 100%;
  padding: var(--choose-padding) 0;
  overflow: hidden;
  &-widget {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: size(300);
      height: size(350);
      z-index: -1;
      left: 0;
      bottom: size(-50);
      transform: rotate(55deg);
      @media screen and (min-width: $breakpoint-md) {
        bottom: size(-118);
        left: -10%;
        width: size(500);
        height: size(600);
        background: url("../assets/services/bg_shape.png") transparent no-repeat;
        background-position: bottom size(28) left 0;
        background-size: contain;
        padding-bottom: size(100);
      }
    }
    &:after {
      content: '';
      position: absolute;
      width: size(300);
      height: size(300);
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url("../assets/polygon_image.png") transparent no-repeat center;
      background-size: contain;
      @media screen and (min-width: $breakpoint-md) {
        width: size(400);
        height: size(400);
      }
      @media screen and (min-width: $breakpoint-md) {
        width: size(550);
        height: size(550);
      }
    }
    >h2 {
      font-size: var(--choose-title-font-size);
      line-height: var(--choose-title-line-height);
      font-weight: 500;
      text-align: center;
    }
    &-group {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      padding-top: var(--choose-group--padding-top);
      column-gap: size(25);
      .group-item {
        background-color: var(--regular-text-inv);
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.12);
        transition: all 0.3s ease-in-out;
        max-width: size(300);
        padding: size(10) size(15) size(20) size(15);
        margin-bottom: size(25);
        h5 {
          font-size: var(--group--title--font-size);
          line-height: var(--group--title--line-height);
          font-weight: 500;
          margin: 0 0 size(10);
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
            height: size(2);
            background: var(--secondary-bg);
          }
        }
        p {
          font-size: var(--group-desc-font-size);
          line-height: var(--group-desc-line-height);
          font-weight: 400;
        }
        &:last-child{
          margin-bottom: 0;
        }
      }
      >div {
        margin-bottom: size(30);
      }
    }
    @media screen and (min-width: $breakpoint-md) {
      &-group {
        flex-flow: row;
        .group-item {
          margin-bottom: size(30);
        }
      }
    }
  }
}
</style>

<script>
export default {
}
</script>
