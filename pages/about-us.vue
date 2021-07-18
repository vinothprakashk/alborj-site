<template>
  <div>
    <Banner :title="'Who we are'" :description="'Al Borj Group  is one of the reputed manpower supply and MEP subcontracting company in UAE'" />
    <div class="container">
      <div class="common__content">
        <h1 class="common__title">
          WHO WE ARE
        </h1>
        <p>
          <strong>AL BORJ OIL FIELD SERVICES</strong> is one of the reputed manpower supply and MEP subcontracting company in Dubai, UAE formed in 2002, has been actively providing qualified, trained, and skilled manpower, Human Resources, and support services solutions to a diversified industry domain covering Fabrication and Construction Yards, Plant Maintenance Services – Industrial, Power, Steel, Cement, Oil, and Gas Construction projects – Greenfield and brownfield, Onshore and Offshore Marine Industry &amp; Shipyards.
        </p>
        <p>
          From the very early stages the company undertook sub-contract works in the industrial sector in Electro-Mechanical and Civil with the increase in skilled manpower, the company diversified its activities in the Oilfield and Marine Sectors. With a strong and professionally managed infrastructure, Al Borj has now proved to be capable of meeting all our client’s requirements in terms of manpower and subcontracting. Our teams of technicians are very well qualified, and have an excellent work history with reputed multinational companies, and have been deployed in various sites of major turnkey projects.
        </p>
        <div class="another-company">
          <div class="left-image">
            <img src="../assets/aremco_logo.jpg" alt="Aremco">
          </div>
          <div class="right-content">
            <p>
              <strong>AL RABWA ELECTRICAL &amp; MECHANICAL SERVICES LLC</strong>, Dubai, a reputed company established in 1985 and it’s a subsidiary of Al Borj Group. The group company originated in 2006 and is very proud to denote the skills of the experienced workers of this company. We have more than 500 numbers of experienced skilled and semi-skilled workers from different countries.
            </p>
            <p>
              Our Customer Relations Department to ensure total customer satisfaction. This division mainly deals with all customer requirements concerning mobilization, demobilization of manpower, safety materials and prompt replacement of any worker that our clients feel is not productive.Another unique aspect we have is our safety measures. All our workers are protected by Full Insurance coverage throughout the United Arab Emirates
            </p>
            <div class="clients">
              <div class="sub">
                <img src="../assets/clients/ALEC - DUBAI.jpg" alt="ALEC - DUBAI">
              </div>
              <div class="sub">
                <img src="../assets/clients/BINGHATTI - DUBAI.jpg" alt="BINGHATTI">
              </div>
              <div class="sub">
                <img src="../assets/clients/ADPF - ABU DHABI.jpg" alt="ADPF - ABU DHABI">
              </div>
              <div class="sub">
                <img src="../assets/clients/ALEMCO - DUBAI.jpg" alt="ALEMCO - DUBAI">
              </div>
            </div>
          </div>
        </div>
        <div class="objectives">
          <h3>OUR OBJECTIVES</h3>
          <div class="objectives-list">
            <div class="objective-item wow animate__fadeInLeft">
              <div class="box-image">
                <a href="#" target="_self">
                  <span>
                    <img src="../assets/services/job1.png" alt="MISSION">
                  </span>
                </a>
              </div>
              <div class="box-content">
                <h5>MISSION </h5>
                <p>
                  Our Mission is to provide the most experienced and skilled workforce for all our clients at a competitive price and create more career opportunities to help the potential candidates
                </p>
              </div>
            </div>
            <div class="objective-item wow animate__fadeInUp">
              <div class="box-image">
                <a href="#" target="_self">
                  <span>
                    <img src="../assets/services/job2.png" alt="Vision">
                  </span>
                </a>
              </div>
              <div class="box-content">
                <h5>VISION</h5>
                <p>
                  Our Vision is to be a leading provider in quality manpower services in the United Arab Emirates, by establishing long-lasting relationships with our clients through our quality services that will help our clients to achieve more success.
                </p>
              </div>
            </div>
            <div class="objective-item wow animate__fadeInRight">
              <div class="box-image">
                <a href="#" target="_self">
                  <span>
                    <img src="../assets/services/job3.png" alt="VALUES">
                  </span>
                </a>
              </div>
              <div class="box-content">
                <h5>VALUES </h5>
                <p>
                  Our people’s friendly culture backed with a customer-centric approach helps to develop commitment and dedication by incorporating ethical standards and best practices within us and for our customers. We are determined and passionate to give the best in us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Contact />
  </div>
</template>

<style lang="scss" scoped>
.another-company {
  display: flex;
  column-gap: size(20);
  margin-top: size(40);
  .clients {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .sub {
      max-width: size(150);
      margin-bottom: size(20);
      img {
        max-width: 100%;
      }
    }
  }
  @media screen and (min-width: $breakpoint-md) {
    column-gap: size(40);
    margin-top: size(60);
  }
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
    min-height: size(450);
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

  @media screen and (min-width: $breakpoint-lg) {
    &-list {
      flex-flow: row;
      column-gap: size(25);
    }
  }
}
</style>
