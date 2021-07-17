<template>
  <div>
    <Banner :title="'Join Our Team'" :only-content="true" :description="careers[0].desc" :custom-class="'joinus'" />
    <div class="container">
      <div class="common__content">
        <!-- <p class="align-center">
          <span class="common__title">
            {{ careers[0].title }}
          </span>
        </p> -->
        <div class="job-list">
          <template v-for="(service, index) in careers[0].list">
            <div :key="index" class="job-item item">
              <template v-if="service.icon == 'helper'">
                <img class="worker-bg" src="../assets/services/helper.svg" alt="helper">
              </template>
              <template v-else>
                <img class="worker-bg" src="../assets/services/supervisor.svg" alt="Alborj">
              </template>
              <h5>{{ service.title }}</h5>
              <ul class="notes">
                <template v-for="note in service.notes">
                  <li :key="note">
                    {{ note }}
                  </li>
                </template>
              </ul>
              <a class="join-us" href="mailto:alrabwaems@gmail.com">Join Us</a>
            </div>
          </template>
        </div>
      </div>
    </div>
    <Contact />
  </div>
</template>

<script>
export default {
  data () {
    return {
      careers: [
        {
          key: 'section_1',
          title: 'Join Our Team',
          desc: 'People & culture make our organisation a great place to work at',
          list: [{
            title: 'Marketing Specialist',
            icon: 'supervisor',
            notes: [
              '5 to 10 Experience',
              'Specialist in Manpower Industry Marketing',
              'UAE Driving Licence Holder'
            ]
          }, {
            title: 'Industrial electrical technician',
            icon: 'helper',
            notes: [
              'Know about Repairing & maintenance of all electrical tools and equipment at site.',
              'Knowledge about PLC & VFD',
              'Experience in systematic electrical drawing about heavy electrical machinery',
              'Experience in electrical control & Power wiring in electrical panels',
              'Must have knowledge about circuit breaker, magnetic contactor, overload & control relay, electrical sensors',
              'Minimum 3 years electrical industrial experience',
              'Able to install new motors and electrical connection according to electrical drawing'
            ]
          }]
        }
      ]
    }
  },
  head: {
    title: 'Alborj Group UAE Blogs | Manpower Service Providers in UAE',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Alborj Group UAE Blogs | specialize in car battery replacement, flat tire servicing, fuel delivery, towing service and jump start services in UAE'
      },

      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Alborj Group UAE Blogs | Manpower Service Providers in UAE'
      },

      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Alborj Group UAE Blogs | specialize in car battery replacement, flat tire servicing, fuel delivery, towing service and jump start services in UAE'
      }
    ]
  }
}
</script>

<style lang="scss">
.common__content p {
  text-align: center;
}
.alborj-logo {
  #logo-name {
    fill: #fff !important;
  }
}
</style>

<style lang="scss" scoped>
.align-center {
  text-align: center;
}
.job-list {
  display: flex;
  flex-flow: column;

  @media screen and (min-width: $breakpoint-md) {
    flex-flow: row;
    column-gap: size(30);
    background: url("../assets/services/bg_shape.png") transparent no-repeat;
    background-position: bottom size(50) right 0;
    background-size: size(315);
    padding-bottom: size(100);
    padding-right: size(60);

    .job-item {
      flex-basis: 50%;
    }
  }
}
.job-item {
  --title-font-size: #{size(18)};
  --title-line-height: #{size(24)};

  @media screen and (min-width: $breakpoint-md) {
    --title-font-size: #{size(22)};
    --title-line-height: #{size(28)};
  }
  justify-content: center;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  padding: size(25) size(25);
  background-color: var(--regular-text-inv);
  margin: size(10) 0;
  min-height: size(360);
  svg, img {
    width: size(150);
    height: size(150);
    margin-bottom: size(15);
  }
  h5 {
    font-size: var(--title-font-size);
    line-height: var(--title-line-height);
    margin-bottom: size(15);
    color: #333;
  }
}
.join-us {
  position: relative;
  display: inline-block;
  margin: 15px 0;
  padding: 12px 27px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #333;
  background: #ffffff;
  border: 3px solid #e06565;
  cursor: pointer;
  transition: ease-out 0.5s;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
  &:after, &:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    transition: .5s;
  }
  &:after {
    top: -9px;
    left: -9px;
    border-top: 3px solid transparent;
    border-left: 3px solid transparent;
  }
  &:before {
    bottom: -9px;
    right: -9px;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
  }
  &:hover {
    color: #333;
    &:after, &:before {
      width: 30px;
      height: 30px;
      border-color: #333;
    }
  }
}
.notes {
  padding-left: size(25);
  >li {
    display: block;
    padding: size(10) 0;
    font-size: var(--common-para-font-size);
    line-height: var(--common-para-line-height);
    position: relative;
    cursor: pointer;
    &:before {
      content: '\21D2';
      position: absolute;
      margin-left: -1.5em;
      padding-right: 1em;
      color: rgba(255,0,0,1);
    }
  }
}
</style>
