<template>
  <div id="contactus" class="contact">
    <div class="container">
      <div class="contact-inner">
        <div class="contact-inner__box wow animate__pulse" data-wow-duration="3s">
          <h3>Contact Us</h3>
          <div class="request-form">
            <form action="javascript:void(0);">
              <div class="form-group">
                <div class="form-control">
                  <label for="name">Name <span class="required">*</span></label>
                  <input id="name" v-model="formData.name" type="text" placeholder="Your Name">
                </div>
                <div class="form-control">
                  <label for="email">Email <span class="required">*</span></label>
                  <input id="email" v-model="formData.email" type="email" placeholder="Your Email">
                </div>
              </div>
              <div class="form-group">
                <div class="form-control">
                  <label for="phone">Phone</label>
                  <input id="phone" v-model="formData.phone" type="text" placeholder="Your Phone">
                </div>
                <div class="form-control">
                  <label>Service <span class="required">*</span></label>
                  <select v-model="formData.service">
                    <option value="Construction Consultant">
                      Construction Consultant
                    </option>
                    <option value="General Contracting">
                      General Contracting
                    </option>
                    <option value="Laminate Flooring">
                      Laminate Flooring
                    </option>
                  </select>
                </div>
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
                Submit
              </button>
            </form>
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
    this.from_email = ''
    this.service = 'Construction Consultant'
    this.to_email = 'info@alborjgroupuae.com'
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
      const apiPrefix = 'https://alborj-server.herokuapp.com'
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
.contact {
  --service-font-size: #{size(14)};
  --service-line-height: #{size(16)};

  --contact-title-font-size: #{size(18)};
  --contact-title-line-height: #{size(22)};
  --contact-title-margin-bottom: #{size(20)};

  background: url("../assets/contact/contact_bg.png");
  background-size: contain;
  @media screen and (min-width: $breakpoint-md) {
    --service-font-size: #{size(16)};
    --service-line-height: #{size(20)};

    --contact-title-font-size: #{size(24)};
    --contact-title-line-height: #{size(32)};
    --contact-title-margin-bottom: #{size(40)};
    background-position: bottom right;
    background-size: cover;
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
      background: url("../assets/contact/contact_square_bg.svg") transparent;
      background-size: cover;
      box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
      padding: size(30) size(15);
      max-width: size(600);
      margin: 0 auto;
      h3 {
        font-size: var(--contact-title-font-size);
        line-height: var(--contact-title-line-height);
        text-align: left;
        margin-bottom: size(10);
      }
      .request-form {
        text-align: right;
        .form-group {
          display: flex;
          flex-wrap: wrap;
          flex-grow: 1;
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
          font-weight: 400;
          justify-content: space-between;
          outline: none;
          font-size: var(--service-font-size);
          padding: 10px 20px;
          min-width: size(150);
          box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
          transition: all 0.3s ease-in-out;
          margin-top: size(30);
          margin-right: 4%;
          cursor: pointer;
          &:hover {
            animation: jump-up-shadow 350ms ease-out;
          }
        }
      }
    }
    @media screen and (min-width: $breakpoint-md) {
      padding: size(120) 0;
      &__box {
        padding: size(30) size(15) size(30) size(45);
        h3 {
          margin-bottom: size(20);
        }
        .request-form {
          text-align: right;
          .form-group {
            display: flex;
            flex-wrap: wrap;
            flex-grow: 1;
            >div {
              flex-basis: 47%;
              padding-right: 2%;
            }
          }
        }
      }
    }
  }
}
</style>
