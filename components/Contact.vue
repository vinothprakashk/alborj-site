<template>
  <div id="services" class="services">
    <div class="container">
      <div class="services-inner">
        <div class="services-inner__box">
          <div class="services-inner__box__left">
            <h2>Our Services</h2>
            <div class="services-inner-group">
              <h4>
                <span class="img-placeholder" />
                <span>Battery Replacement</span>
              </h4>
              <h4>
                <span class="img-placeholder" />
                <span>Jump Start Services</span>
              </h4>
              <h4>
                <span class="img-placeholder" />
                <span>Towing Services</span>
              </h4>
              <h4>
                <span class="img-placeholder" />
                <span>Flat Tyre Services</span>
              </h4>
              <h4>
                <span class="img-placeholder" />
                <span>Fueling Services</span>
              </h4>
              <h4>
                <span class="img-placeholder" />
                <span>Key Lost or Locked</span>
              </h4>
            </div>
          </div>
          <div class="services-inner__box__right">
            <h3>Request Appointment from Alborj Group UAE</h3>
            <div class="request-form">
              <form action="javascript:void(0);">
                <div class="form-group">
                  <div class="form-control">
                    <label for="name">Name <span class="required">*</span></label>
                    <input id="name" v-model="formData.name" type="text" placeholder="Your Name">
                  </div>
                  <div class="form-control">
                    <label for="phone">Phone <span class="required">*</span></label>
                    <input id="phone" v-model="formData.phone" type="text" placeholder="Your Phone">
                  </div>
                </div>
                <div class="form-control">
                  <label>Service <span class="required">*</span></label>
                  <select v-model="formData.service" class="single-input">
                    <option value="Battery Replacement">
                      Battery Replacement
                    </option>
                    <option value="Jump Start Services">
                      Jump Start Services
                    </option>
                    <option value="Towing Services">
                      Towing Services
                    </option>
                    <option value="Flat Tyre Services">
                      Flat Tyre Services
                    </option>
                    <option value="Fueling Services">
                      Fueling Services
                    </option>
                    <option value="Bat">
                      Key Lost or Locked
                    </option>
                  </select>
                </div>
                <div class="form-control">
                  <label for="password">Location</label>
                  <input
                    id="location"
                    v-model="formData.location"
                    class="single-input"
                    type="text"
                    placeholder="Khalifa City A, Abu Dhabi"
                  >
                </div>
                <div class="form-control">
                  <label for="password">Message <span class="required">*</span></label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    class="single-input"
                    placeholder="Message"
                    rows="3"
                  />
                </div>
                <button class="btn" :disabled="showLoader" @click="requestCallback">
                  Request Callback
                </button>
              </form>
            </div>
          </div>
        </div>
        <div v-if="showAlert" :class="['alert-popup', errorOn ? 'error':'success']">
          <div class="alert-popup__inner">
            <h5 v-if="!errorOn" id="custom_alert_head">
              Request received!
            </h5>
            <p>{{ alertMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export class FormInfo {
  constructor () {
    this.subject = 'Call Back request!'
    this.name = ''
    this.phone = ''
    this.service = 'Battery Replacement'
    this.to_email = 'info.doctorbattery@gmail.com'
    this.location = ''
    this.message = ''
    this.template_id = 'd-9fe5fbafaac24bfc8b4d0eac2e500d26'
  }
}

export default {
  data () {
    return {
      showAlert: false,
      formData: new FormInfo(),
      showLoader: false,
      errorOn: false,
      alertMessage: 'Thanks for reaching Alborj Group UAE. Our team will reach you soon!'
    }
  },
  methods: {
    isNumeric (str) {
      if (typeof str !== 'string') {
        return false // we only process strings!
      }
      return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    },
    requestCallback () {
      this.showLoader = true
      const apiPrefix = 'https://doctorbattery-server.herokuapp.com'
      // const apiPrefix = 'http://localhost:3001'
      if (this.formData.name === '' || this.formData.phone === '' || this.formData.message === '') {
        this.errorOn = true
        this.alertMessage = 'Please try with valid input!'
        this.showAlert = true
        setTimeout(() => {
          this.errorOn = false
          this.showAlert = false
          this.showLoader = false
        }, 4000)
        return false
      }
      if (!this.isNumeric(this.formData.phone)) {
        this.errorOn = true
        this.alertMessage = 'Enter valid mobile number!'
        this.showAlert = true
        setTimeout(() => {
          this.errorOn = false
          this.showAlert = false
          this.showLoader = false
        }, 4000)
        return false
      }
      this.$axios.post(
        `${apiPrefix}/api/send-mail/`, this.formData).then((response) => {
        this.alertMessage = 'Thanks for reaching Alborj Group UAE. Our team will reach you soon!'
        this.showAlert = true
        setTimeout(() => {
          this.formData = new FormInfo()
          this.showAlert = false
          this.showLoader = false
        }, 4000)
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error 3 ' + error)
        this.errorOn = true
        this.alertMessage = 'Try after sometime!'
        this.showAlert = true
        setTimeout(() => {
          this.errorOn = false
          this.showAlert = false
          this.showLoader = false
        }, 4000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.services {
  --service-font-size: #{size(14)};
  --service-line-height: #{size(16)};

  --services-title-font-size: #{size(18)};
  --services-title-line-height: #{size(22)};
  --services-title-margin-bottom: #{size(20)};

  @media screen and (min-width: $breakpoint-lg) {
    --service-font-size: #{size(16)};
    --service-line-height: #{size(20)};

    --services-title-font-size: #{size(24)};
    --services-title-line-height: #{size(32)};
    --services-title-margin-bottom: #{size(40)};
  }

  background-color: #f5f5f5;

  .container {
    max-width: size(850);
  }
  &-inner {
    text-align: center;
    padding: size(60) 0;
    position: relative;
    .alert-popup {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9;
      box-shadow: 0px 0px 4px #848484;
      min-width: 350px;
      transition: all 0.3s ease;
      &.error{
        color: var(--error-color);
        box-shadow: 0px 0px 4px var(--error-color);
      }
      &.success{
          color: var(--secondary-bg);
          box-shadow: 0px 0px 4px var(--master-bg)
      }
      &__inner {
        background-color: #fff;
        padding: size(15) size(10) size(25) size(10);
        box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
        h5{
          font-size: 18px;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 15px;
          padding: 0 45px 0 15px;
          position: relative;
          color: var(--regular-text);
        }
        p{
          font-size: 16px;
          padding: 0 15px;
        }
      }
    }
    &__box {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
      &__left {
        flex-basis: 40%;
        padding: size(15) 0;
        background: linear-gradient(to left bottom, var(--secondary-bg), var(--master-bg));
        h2 {
          font-size: var(--services-title-font-size);
          line-height: var(--services-title-line-height);
          font-weight: bold;
          color: var(--regular-text);
          margin-bottom: size(10);
          display: inline-block;
          vertical-align: middle;
          z-index: 1;
          text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.78);
        }
      }
      &__right {
        padding: size(30) size(15) size(30) size(15);
        flex: 1;
        h3 {
          font-size: var(--services-title-font-size);
          line-height: var(--services-title-line-height);
          text-align: center;
          padding: size(20) 0;
        }
        .request-form {
          .form-group {
            display: flex;
            flex-wrap: wrap;
            flex-grow: 1;
            >div {
              flex-basis: 47%;
              padding-right: 2%;
            }
          }
          .form-control {
            margin: 10px 0;
            width: 100%;
            text-align: left;
            .required {
              color: #ff0000;
            }
            input:not([type="checkbox"]), textarea, select {
              background-color: transparent;
              border: 2px solid #f5f5f5;
              border-radius: 3px;
              font-family: inherit;
              font-size: 16px;
              padding: 10px;
              width: 100%;
              box-sizing: border-box;
              &:focus {
                outline: none;
                border-color: var(--master-bg);
              }
            }
            .single-input{
              max-width: 96%;
            }
          }
          label {
            display: inline-block;
            font-weight: bold;
            margin-bottom: size(10);
          }
          .btn {
            background: var(--secondary-bg);
            color: var(--regular-text-inv);
            font-weight: 400;
            justify-content: space-between;
            outline: none;
            font-size: var(--service-font-size);
            padding: 10px 20px;
            border-radius: 30px;
            box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
            transition: all 0.3s ease-in-out;
            margin-top: size(30);
            cursor: pointer;
            &:hover {
              animation: jump-up-shadow 350ms ease-out;
            }
          }
        }
      }
    }

    @media screen and (min-width: $breakpoint-lg) {
      &__box {
        flex-direction: row;
        &__left {
          padding: size(30) size(15);
          h2 {
            margin-bottom: size(20);
          }
        }
        &__right {
          padding-left: 45px;
        }
      }
    }
    &-group {
      text-align: left;
      padding-left: size(20);
      h4 {
        margin-bottom: size(10);
        .img-placeholder {
          width: size(60);
          height: size(60);
          background-image: url("../assets/NewServices.svg");
          background-position: size(-120) size(81);
          background-size: size(301) size(209 );
          margin-right: size(30);
        }
        &:nth-child(2) .img-placeholder{
          background-position: size(79) size(81);
        }
        &:nth-child(3) .img-placeholder{
          background-position: size(-22) size(81);
        }
        &:nth-child(4) .img-placeholder{
          background-position: size(83) size(-23);
        }
        &:nth-child(5) .img-placeholder{
          background-position: size(186) size(-24);
        }
        &:nth-child(6) .img-placeholder{
          background-position: size(-17) size(-23);
        }
        span {
          font-size: var(--service-font-size);
          line-height: var(--service-line-height);
          font-weight: 600;
          display: inline-block;
          vertical-align: middle;
          color: #fff;
          @media screen and (min-width: $breakpoint-lg) {
            max-width: size(100);
          }
        }
      }
    }
  }
}
</style>
