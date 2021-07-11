<template>
  <div class="banner">
    <div class="container">
      <div class="banner-inner">
        <div class="banner-inner-left">
          <h1 class="wow animate__fadeInDown" data-wow-duration="2s">
            A Reliable Solution
            <span>To Get Technical Manpower Supply</span>
          </h1>
          <div class="wow animate__fadeInUp" data-wow-duration="2s">
            <p>
              Al Borj Group has the efficiency to offer Skilled and Semi-Skilled large scale manpower supply to growing business of Construction &amp; Oil and Gas Field.
            </p>
            <p>
              <a class="cta-btn focus" href="#services" title="Our Services" data-wow-duration="2s" data-wow-delay="2s">
                Our Services
              </a>
              <a class="cta-btn" href="#contactus" title="Get Quote" data-wow-duration="2s" data-wow-delay="2s">
                Get Quote
              </a>
            </p>
          </div>
        </div>
        <img class="worker-bg" src="../assets/workers.svg" alt="Alborj Manpower supply">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
    background-color: var(--secondary-bg);
    &-inner {
      min-height: size(425);
      background-image: url('../assets/banner_buildings.svg');
      background-position: bottom left;
      background-repeat: no-repeat;
      background-size: 80%;
      position: relative;
      display: flex;
      &-left {
        padding: size(40) size(15);
        padding-left: size(60);
        margin-top: auto;
      }
      h1 {
        font-size: size(18);
        font-weight: 700;
        margin-bottom: size(15);
        span {
          display: block;
        }
      }
      p {
        font-size: size(16);
        line-height: 1.5;
        color: #222;
        margin-bottom: size(10);
      }
      .worker-bg {
        display: none;
      }
      .cta-btn {
        font-size: size(14);
        font-weight: 500;
        display: inline-block;
        padding: size(10) size(15);
        border: 1px solid #333;
        border-radius: size(3);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        margin: size(15) size(10) size(15) 0;
        cursor: pointer;
        outline: none;
        &.focus {
          background-color: #fff;
        }
        &:hover {
          box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
          transform: translateY(size(-5));
        }
      }
      @media screen and (min-width: size(768)) {
        min-height: size(600);
        background-size: size(650);
        &-left {
          padding-bottom: size(120);
          padding-left: size(120);
          max-width: size(600);
        }
        h1 {
          font-size: size(42);
          margin-bottom: size(25);
          span {
            font-size: size(32);
          }
        }
        p {
          font-size: size(22);
          margin-bottom: size(20);
        }
        .worker-bg {
          position: absolute;
          bottom: size(-15);
          right: size(15);
          max-width: size(300);
          display: block;
        }
        .cta-btn {
          font-size: size(16);
        }
      }
      @media (min-width: size(768)) and (max-width: size(991)) {
        .worker-bg {
          bottom: size(40);
          right: size(-17);
        }
      }
    }
}
</style>
