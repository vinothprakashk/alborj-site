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
          <h3>AL BORJ INTERNATIONAL OIL FIELD SERVICES CO LLC</h3>
          <p style="margin-bottom: 10px">
            38181, SHARJAH, UAE
          </p>
          <p>
            <svg><use xlink:href="#phone1" /></svg>
            <a class="mobile-number" href="tel:971065659683" title="Call">
              065659683
            </a>
          </p>
          <p>
            <svg><use xlink:href="#mail" /></svg>
            <a href="mailto:abofs@eim.ae" title="mailus">
              abofs@eim.ae
            </a>
          </p>
          <p>
            <svg><use xlink:href="#map" /></svg>
            <a href="https://goo.gl/maps/BcfeSdbePb9K3f2a6" target="_blank" title="Directions">
              Directions
            </a>
          </p>
        </div>
        <div class="footer-inner-cols">
          <h3>AL RABWA ELEC &amp; MECH SERVICES LLC</h3>
          <p style="margin-bottom: 10px">
            28639, DUBAI, UAE
          </p>
          <p>
            <svg><use xlink:href="#phone1" /></svg>
            <a class="mobile-number" href="tel:971043932547" title="Call">
              043932547
            </a><br>
            <svg><use xlink:href="#fax" /></svg>
            <a class="mobile-number" href="tel:971043932548" title="Call">
              043932548
            </a>
          </p>
          <p>
            <svg><use xlink:href="#mail" /></svg>
            <a href="mailto:alrabwaems@gmail.com" title="mailus">
              alrabwaems@gmail.com
            </a><br>
            <svg><use xlink:href="#mail" /></svg>
            <a href="mailto:aremco@emirates.net.ae" title="mailus">
              aremco@emirates.net.ae
            </a>
          </p>
          <p>
            <svg><use xlink:href="#map" /></svg>
            <a href="https://goo.gl/maps/BcfeSdbePb9K3f2a6" target="_blank" title="Directions">
              Directions
            </a>
          </p>
        </div>
        <div class="footer-inner-cols">
          <h2>Our Services</h2>
          <ul class="footer-inner-list dual-col">
            <li>
              <a
                href="/about-us"
                title="Who we are"
              >
                Who we are
              </a>
            </li>
            <li>
              <a
                href="/services"
                title="Services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/careers"
                title="Careers"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#contactus"
                title="Contact Us"
              >
                Contact Us
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
    padding-top: size(15);
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
      padding-right: size(15);
      h2 {
        font-size: var(--title-font-size);
        line-height: var(--title-line-height);
        font-weight: bold;
        margin-bottom: size(10);
        color: #58585a;;
      }
      h3 {
        font-size: size(14);
        line-height: 1;
        font-weight: bold;
        margin-bottom: size(10);
        color: #e06565;
      }
      p {
        font-size: size(16);
        line-height: size(20);
        margin-bottom: size(10);
        svg {
          width: size(25);
          height: size(25);
          vertical-align: middle;
          margin-right: size(7);
        }
        .mobile-number {
          font-size: var(--title-font-size);
          line-height: var(--title-line-height);
          font-weight: bold;
          text-decoration: underline;
          display: inline-block;
          margin: size(5) 0;
        }
        a {
          display: inline-block;
          padding: size(5) 0;
          vertical-align: middle;
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
