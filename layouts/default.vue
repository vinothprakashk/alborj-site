<template>
  <div class="common">
    <all-svg />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
.align-center {
  text-align: center;
}
.common {
  --common-title-font-size: #{size(24)};
  --common-title-line-height: #{size(30)};

  --common-para-font-size: #{size(14)};
  --common-para-line-height: #{size(18)};

  @media screen and (min-width: $breakpoint-lg) {
    --common-title-font-size: #{size(32)};
    --common-title-line-height: #{size(36)};

    --common-para-font-size: #{size(18)};
    --common-para-line-height: #{size(26)};
  }
  &__content {
    padding: size(40) size(15) size(60) size(15);
    p {
      font-size: var(--common-para-font-size);
      line-height: var(--common-para-line-height);
      margin-bottom: size(15);
    }
    .objectives {
      padding: size(40) 0;
      h3 {
        font-size: size(24);
        line-height: size(30);
        margin: size(20) 0;
        font-weight: bold;
        text-align: center;
        padding-bottom: 20px;
        color: #e06565;
      }
      &-list {
        display: flex;
        flex-flow: column;
        .objective-item {
          position: relative;
          margin: 0 auto;
          margin-bottom: size(20);
          max-width: size(370);
          h5 {
            font-size: var(--common-para-font-size);
            line-height: var(--common-para-line-height);
            font-weight: bold;
            margin-bottom: size(15);
            text-shadow: 1px 1px 1px #000000ab;
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
              background: #e06565;
              margin: 0 auto;
            }
          }
          p {
            font-size: size(18);
            line-height: size(24);
            text-shadow: 1px 1px 1px #000000ab;
          }
          img {
            width: 100%;
            height: auto;
          }
          .box-content {
            position: absolute;
            padding: 0 20px;
            left: 0;
            right: 0;
            bottom: 20px;
            z-index: 2;
            color: #fff;
          }
        }
      }
    }
  }
  &__title {
    font-size: var(--common-title-font-size);
    line-height: var(--common-title-line-height);
    font-weight: 700;
    font-weight: normal;
    margin-bottom: size(25);
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

  @media screen and (min-width: $breakpoint-lg) {
    &__content {
      .objectives {
        &-list {
          flex-flow: row;
          column-gap: size(25);
        }
      }
    }
  }
}
</style>
