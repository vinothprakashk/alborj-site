<template>
  <section class="subsection">
    <div class="container">
      <div :class="['subsection-inner', revOrder ? 'reverse' : '']">
        <div class="subsection-inner-content">
          <h2>{{ title }}</h2>
          <p>
            {{ desc }}
          </p>
          <p>
            <a class="cta-btn focus" href="mailto:info@alborjgroupuae.com" title="Email Us">
              Email Us
            </a>
          </p>
        </div>
        <div class="subsection-inner-image">
          <slot><img class="worker-bg" src="../assets/sub/contract.png" alt="Alborj Contract"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Sub Contracting'
    },
    desc: {
      type: String,
      default: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'
    },
    revOrder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.subsection {
  &-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: size(30);
    &-content {
      padding: size(30) size(15);
      h2 {
        font-size: size(18);
        font-weight: 700;
        margin-bottom: size(20);
      }
      p {
        font-size: size(16);
        line-height: size(22);
        font-weight: 500;
        margin-bottom: size(15);
      }
    }
    &-image {
      flex: 1;
      text-align: center;
      padding: size(10);
      img {
        max-width: 100%;
      }
    }
  }
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
@media screen and (min-width: $breakpoint-md) {
  .subsection {
    &-inner {
      display: flex;
      flex-direction: row;
      margin: size(45) auto;
      &.reverse {
        .subsection-inner-content {
          order: 2;
        }
        .subsection-inner-image {
          order: 1;
        }
      }
      &-content {
        flex-basis: 40%;
        h2 {
          font-size: size(24);
          font-weight: 700;
          margin-bottom: size(20);
        }
        p {
          font-size: size(20);
          line-height: 1.3;
          font-weight: 500;
          margin-bottom: size(15);
        }
      }
    }
  }
}
</style>
