<template>
  <div>
    <Banner :title="'Services'" :custom-class="'services'" :description="'We at Al Borj Group provide a range of services in MEP and Oil & Gas field specifically for your needs'" :only-content="true" />
    <sub-section :title="subSections[0].title" :desc="subSections[0].desc" :rev-order="true">
      <img class="worker-bg" src="../assets/sub/man_power.png" alt="Alborj Contract">
    </sub-section>
    <sub-section :title="subSections[1].title" :desc="subSections[1].desc" />
    <div class="container">
      <p class="align-center">
        <span class="common__title">
          Our Services
        </span>
      </p>
      <div class="services-list owl-carousel">
        <template v-for="(service, index) in subSections[0].list">
          <div :key="index" class="service-item item">
            <template v-if="service.icon == 'charge-hand'">
              <img class="worker-bg" src="../assets/services/charge-hand.svg" alt="charge-hand">
            </template>
            <template v-else-if="service.icon == 'fore-man'">
              <img class="worker-bg" src="../assets/services/fore-man.svg" alt="fore-man">
            </template>
            <template v-else-if="service.icon == 'welder'">
              <img class="worker-bg" src="../assets/services/welder.svg" alt="welder">
            </template>
            <template v-else-if="service.icon == 'duct-man'">
              <img class="worker-bg" src="../assets/services/duct-man.svg" alt="duct-man">
            </template>
            <template v-else-if="service.icon == 'plumber'">
              <img class="worker-bg" src="../assets/services/plumber.svg" alt="plumber">
            </template>
            <template v-else-if="service.icon == 'pipe-fitter'">
              <img class="worker-bg" src="../assets/services/pipe-fitter.svg" alt="pipe-fitter">
            </template>
            <template v-else-if="service.icon == 'helper'">
              <img class="worker-bg" src="../assets/services/helper.svg" alt="helper">
            </template>
            <template v-else-if="service.icon == 'technicians'">
              <img class="worker-bg" src="../assets/services/technicians.svg" alt="technicians">
            </template>
            <template v-else-if="service.icon == 'electrician'">
              <img class="worker-bg" src="../assets/services/electrician.svg" alt="electrician">
            </template>
            <template v-else>
              <img class="worker-bg" src="../assets/services/supervisor.svg" alt="Alborj">
            </template>
            <h5>{{ service.title }}</h5>
          </div>
        </template>
      </div>
    </div>
    <Contact />
  </div>
</template>

<script>
import SubSection from '~/components/SubSection.vue'
export default {
  components: { SubSection },
  data () {
    return {
      subSections: [
        {
          key: 'section_1',
          title: 'MANPOWER SUPPLY',
          desc: 'As a Manpower Supply Company, is created and developed to help businesses in the entire UAE in acquiring the right personnel to meet their business needs. Al Borj leverages an international talent acquisition network to identify, qualify, recruit and integrate world-class talent in a high performing corporate environment.',
          list: [{
            title: 'SUPERVISOR',
            icon: 'supervisor'
          }, {
            title: 'FOREMAN',
            icon: 'fore-man'
          }, {
            title: 'CHARGE HAND',
            icon: 'charge-hand'
          }, {
            title: 'WELDER',
            icon: 'welder'
          }, {
            title: 'FABRICATOR',
            icon: 'supervisor'
          }, {
            title: 'ELECTRICIAN',
            icon: 'electrician'
          }, {
            title: 'DUCTMAN',
            icon: 'duct-man'
          }, {
            title: 'PLUMBER',
            icon: 'plumber'
          }, {
            title: 'PIPE FITTER',
            icon: 'pipe-fitter'
          }, {
            title: 'INSULATOR',
            icon: 'duct-man'
          }, {
            title: 'ASSIST TECHNICIANS',
            icon: 'technicians'
          }, {
            title: 'HELPERS',
            icon: 'helper'
          }]
        }, {
          key: 'section_2',
          title: 'MEP SUBCONTRACTING',
          desc: 'As a continuous expansion of the range of the services that AL Borj Group provides to our clients which are intended to be specialized in the design and execution of mechanical, electrical, and plumbing projects.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.align-center {
  text-align: center;
}
.services__title {
  --services-title-font-size: #{size(24)};
  --services-title-line-height: #{size(30)};

  @media screen and (min-width: $breakpoint-lg) {
    --services-title-font-size: #{size(32)};
    --services-title-line-height: #{size(36)};
  }
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
.service-item {
  --title-font-size: #{size(18)};
  --title-line-height: #{size(24)};

  @media screen and (min-width: $breakpoint-md) {
    --title-font-size: #{size(22)};
    --title-line-height: #{size(28)};
  }
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  padding: size(15) size(5) size(10) size(5);
  text-align: center;
  background-color: var(--regular-text-inv);
  margin: size(10) 0;
  min-height: size(180);
  svg, img {
    width: size(80);
    height: size(80);
    margin-bottom: size(15);
  }
  h5 {
    font-size: var(--title-font-size);
    line-height: var(--title-line-height);
    text-align: center;
  }
}
</style>
