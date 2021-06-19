<template>
  <div class="counts">
    <div class="container">
      <div class="counts-widget">
        <h2>We've Completed</h2>
        <p>More than 1000+ Work Successfully</p>
        <div class="counts-widget-group">
          <div class="group-item">
            <svg><use xlink:href="#counts_icon1" /></svg>
            <h5>1784</h5>
            <p>MEP Installation</p>
          </div>
          <div class="group-item">
            <svg><use xlink:href="#counts_icon1" /></svg>
            <h5>1283</h5>
            <p>Oil &amp; Gas Field</p>
          </div>
          <div class="group-item">
            <svg><use xlink:href="#counts_icon1" /></svg>
            <h5>17</h5>
            <p>Sub Contract Projects</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.counts {
  --counts-title-font-size: #{size(24)};
  --counts-title-line-height: #{size(30)};

  --counts-desc-font-size: #{size(16)};
  --counts-desc-line-height: #{size(20)};
  --counts-padding: #{size(40)};
  --counts-group--padding-top: #{size(40)};
  --counts-group--title--font-size: #{size(24)};
  --counts-group--title--line-height: #{size(30)};

  @media screen and (min-width: $breakpoint-lg) {
    --counts-title-font-size: #{size(28)};
    --counts-title-line-height: #{size(32)};

    --counts-desc-font-size: #{size(18)};
    --counts-desc-line-height: #{size(22)};
    --counts-padding: #{size(80)};
    --counts-group--padding-top: #{size(80)};
    --counts-group--title--font-size: #{size(30)};
    --counts-group--title--line-height: #{size(36)};
  }

  width: 100%;
  background-image: url("../assets/counts_bg.png");
  background-size: cover;
  padding: var(--counts-padding) 0;
  color: var(--regular-text-inv);
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(84,128,180,0.47);
  }
  &-widget {
    text-align: center;
    position: relative;
    z-index: 1;
    >h2 {
      font-size: var(--counts-title-font-size);
      line-height: var(--counts-title-line-height);
      font-weight: 500;
      text-shadow: 0px 4px 4px #2E2E2E;
    }
    >p {
      font-size: var(--counts-desc-font-size);
      line-height: var(--counts-desc-line-height);
      font-weight: 400;
      text-shadow: 0px 4px 4px #2E2E2E;
    }
    &-group {
      display: flex;
      flex-flow: column;
      padding-top: var(--counts-group--padding-top);
      svg {
        height: size(78);
        fill: #fff;
      }
      h5 {
        font-size: var(--counts-group--title--font-size);
        line-height: var(--counts-group--title--line-height);
        font-weight: 700;
        margin: size(10) 0;
      }
      p {
        font-size: size(14);
        font-size: size(18);
        font-weight: 700;
      }
      >div {
        margin-bottom: size(30);
      }
      @media screen and (min-width: $breakpoint-md) {
        flex-flow: inherit;
        flex-wrap: wrap;
        >div {
          flex: 50%;
        }
      }
      @media screen and (min-width: $breakpoint-lg) {
        flex-wrap: inherit;
      }
    }
  }
}
</style>

<script>
export default {
}
</script>
