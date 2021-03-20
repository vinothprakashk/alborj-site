<template>
  <div class="header">
    <div class="container">
      <div class="header-inner">
        <div class="header-logo">
          <a href="/" title="Alborj Group">
            <!-- <img src="../assets/logo.png" alt="Alborj Group"> -->
            <Logo />
          </a>
        </div>
        <div class="header-right">
          <div class="header-right-links">
            <a
              href="#contactus"
              title="Contact Us"
            >
              Contact Us
            </a>
            <a
              href="#services"
              title="Services"
            >
              Services
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {

  &-inner {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
  }

  &-logo {
    position: relative;
    padding: size(5) size(0) size(10);
    z-index: 1;
    >a {
      display: block;
    }
    img {
      max-height: size(60);
      margin-top: size(0);
    }
  }
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;

  &-right {
    flex: 1;

    &-links {
      text-align: right;
      padding: size(20) 0 size(10) 0;
      a {
        padding: size(10) size(15);
        display: inline-flex;
        color: #E10000;
        text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.58);
        @media screen and (min-width: $breakpoint-md) {
          font-size: size(18);
          font-weight: bold;
        }
        &:hover {
          color: var(--regular-text);
        }
      }
    }
  }
  @media screen and (min-width: $breakpoint-lg) {
    &-logo img {
      margin-top: size(14);
      max-height: size(100);
    }

    &-right {
      &-links {
        padding: size(40) 0 size(10) 0;
      }
    }
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
