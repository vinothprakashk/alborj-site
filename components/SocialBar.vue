<template>
  <div class="socialbar">
    <div class="socialbar-inner">
      <div class="socialbar-inner-left">
        Follow us
      </div>
      <div class="socialbar-inner-social">
        <a
          href="https://www.linkedin.com/company/al-borj-international-oil-field-services-co-llc"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <svg><use xlink:href="#twitter" /></svg>
        </a>
        <a
          href="https://www.linkedin.com/company/al-borj-international-oil-field-services-co-llc"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <svg><use xlink:href="#facebook" /></svg>
        </a>
        <a
          href="https://www.linkedin.com/company/al-borj-international-oil-field-services-co-llc"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <svg><use xlink:href="#instagram" /></svg>
        </a>
        <a
          href="https://www.linkedin.com/company/al-borj-international-oil-field-services-co-llc"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
        >
          <svg><use xlink:href="#linkedin" /></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.socialbar {
  --super-title-font-size: #{size(36)};
  --super-title-line-height: #{size(42)};
  --socialbar-title-font-size: #{size(18)};
  --socialbar-title-line-height: #{size(24)};

  --strengh-pad-top-bottom: #{size(30)};

  @media screen and (min-width: $breakpoint-lg) {
    --super-title-font-size: #{size(64)};
    --super-title-line-height: #{size(76)};
    --socialbar-title-font-size: #{size(24)};
    --socialbar-title-line-height: #{size(30)};
    --strengh-pad-top-bottom: #{size(60)};
  }
  position: relative;
  &:before {
    content: '';
    position: absolute;
    display: block;
    border: 8px solid #7d7d7d;
    z-index: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    top: 0;
    left: size(-15);
  }
  &-inner {
    display: flex;
    flex-direction: row;
    padding: size(5) size(10);
    background-color: var(--secondary-bg);
    // border-radius: size(3);
    position: relative;
    z-index: 1;
    h2 {
      font-size: var(--super-title-font-size);
      line-height: var(--super-title-line-height);
      margin: size(15) 0;
      text-align: center;
    }
    &-left {
      line-height: size(30);
      font-size: size(12);
      color: var(--regular-text);
    }
    &-social {
      text-align: right;
      a {
        padding: size(5) size(10);
        display: inline-flex;
        @media screen and (min-width: $breakpoint-md) {
          padding: size(5) size(15);
        }
        svg {
          width: size(20);
          height: size(20);
          fill: var(--regular-text);
          transition: all 0.3s ease;
        }
        &:hover {
          svg {
            fill: #f69a10;
          }
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
