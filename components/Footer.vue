<template>
  <div class="footer">
    <div class="container">
      <div class="footer-inner">
        <SocialBar />
        <div class="footer-inner-cols">
          <div class="footer-logo">
            <a href="/" title="Alborj Group UAE">
              <Logo />
            </a>
          </div>
        </div>
        <div class="footer-inner-cols">
          <h2>Contact</h2>
          <p>
            Feel free to reach us! <br>
            <a class="mobile-number" href="tel:971999999999" title="Call">
              099999999
            </a>
          </p>
          <p>
            <a href="mailto:info@alborjgroupuae.com" title="mailus">
              info@alborjgroupuae.com
            </a>
            <a href="/" title="Alborj Group UAE">
              www.alborjgroupuae.com
            </a>
          </p>
        </div>
        <div class="footer-inner-cols">
          <h2>Our Services</h2>
          <ul class="footer-inner-list dual-col">
            <li>
              <a href="#about" title="About Us">
                Sub Contracting
              </a>
            </li>
            <li>
              <a href="/blogs/" title="About Us">
                Man power supply
              </a>
            </li>
            <li>
              <a href="#about" title="About Us">
                Other Services
              </a>
            </li>
            <li>
              <a href="#about" title="About Us">
                Lore ipsum
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          @copyrights 2021 - Alborj Group UAE
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.footer{
  &-inner {
    .socialbar {
      position: absolute !important;
      top: size(-46);
    }
  }
  &-logo {
    .alborj-logo {
      #logo-name {
        fill: #fff;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.footer {
  --title-font-size: #{size(18)};
  --title-line-height: #{size(24)};

  @media screen and (min-width: $breakpoint-md) {
    --title-font-size: #{size(22)};
    --title-line-height: #{size(28)};
  }
  background-color: #000;
  color: var(--regular-text-inv);
  padding: size(30) 0 0;

  a {
    color: var(--regular-text-inv);
  }
  &-inner {
    display: flex;
    text-align: left;
    flex-direction: column;
    position: relative;
    @media screen and (min-width: $breakpoint-md) {
      flex-direction: row;
      justify-content: space-between;
    }

    .footer-logo {
      margin: size(15) 0;
      img {
        max-width: size(150);
        @media screen and (min-width: $breakpoint-lg) {
          max-width: size(200);
        }
      }
    }
    &-cols {
      margin-bottom: size(20);
      h2 {
        font-size: var(--title-font-size);
        line-height: var(--title-line-height);
        font-weight: bold;
        margin-bottom: size(10);
        color: #58585a;;
      }
      p {
        font-size: size(16);
        line-height: size(20);
        .mobile-number {
          font-size: var(--title-font-size);
          line-height: var(--title-line-height);
          font-weight: bold;
          text-decoration: underline;
          display: block;
          margin: size(10) 0;
        }
        a {
          display: block;
          padding: size(5) 0;
        }
      }
      .footer-inner-list {
        margin-bottom: size(15);
        // border-bottom: 2px solid #fff;
        >li a{
          font-size: size(16);
          line-height: size(20);
          font-weight: 500;
          padding: size(10) 0;
          display: block;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      @media screen and (min-width: $breakpoint-md) {
        .footer-inner-list {
          border-bottom: none;
          &.dual-col {
            column-count: 2;
            column-gap: size(40);
          }
          >li a{
            font-size: size(16);
            line-height: size(22);
            font-weight: 500;
          }
        }
      }
    }
  }
  &-bottom {
    background-color: #222;
    color: #ccc;
    text-align: center;
    padding: size(15) 0;
    margin-top: size(60);
  }
}
</style>
