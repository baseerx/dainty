<template>
  <div class="who-we-are">
    <div class="top-bg">
      <div class="content">
        <h3>Who we are</h3>
        <div class="h3-border-bottom"></div>
        <div class="sub-head">Dainty is your one-stop development and digital marketing agency</div>
        <div class="stats">
          <div class="stats-card" v-for="stat in stats" :key="stat">
            <b class="count">{{ stat.count }}</b>
            <p class="text">{{ stat.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bg">
      <div class="content">
        <img class="left-icon" src="/services/arrow-left.png" />
        <div class="main-content">
          <div class="internal-main-content">
            <img class="five-star" src="/services/five-star.png" />
            <div class="text">
              “I’ve been with Dainty for a few years now, I continue to see positive changes in
              their platforms, communication and designers skills. Can’t really complain for the
              price I’m paying.“
            </div>
            <div class="user">
              <img class="user-image" src="/services/user.png" />
              <div class="user-detail">
                <b>Matthew Smith</b>
                <div class="position">CEO, MS Technologies</div>
              </div>
            </div>
          </div>
        </div>
        <img class="right-icon" src="/services/arrow-left.png" />
      </div>
    </div>
    <div class="features">
      <div class="feature-card" v-for="feature in features" :key="feature.text">
        <img :src="feature.img" />
        <div class="card-title">{{ feature.text }}</div>
        <div class="card-sub-title">{{ feature.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    stats: [
      { count: "44,000+", text: "jobs completed since Jun 2013" },
      { count: "39", text: "team members 24/7 worldwide" },
      { count: "4,000+", text: "jobs completed this month" },
      { count: "1,000+", text: "current active customers" },
    ],
    features: [
      {
        img: "/services/feature1.png",
        text: "Never lift a finger",
        description: "Because time is better spent not wrestling WordPress",
      },
      {
        img: "/services/feature2.png",
        text: "A bug free site",
        description: "Because broken sites mean lost customers",
      },
      {
        img: "/services/feature2.png",
        text: "24/7/365",
        description: "Because problems happen at the worst possible time",
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.who-we-are {
  .top-bg {
    background: #f3fbff 0% 0% no-repeat padding-box;
    .content {
      max-width: 1152px;
      margin: auto;
      padding: 60px 75px 170px;
      text-align: center;
      .h3-border-bottom {
        width: 40px;
        border: 1px solid var(--acc-purple-color);
        margin: 12px auto 25px;
      }
      .sub-head {
        color: var(--acc-grey-color);
        font-size: 21px;
        color: #6f6c7f;
      }
      .stats {
        display: grid;
        grid-template-columns: repeat(4, 25%);
        margin-top: 48px;
        .count {
          font-size: 24px;
        }
        .text {
          padding: 8px 40px;
          line-height: 24px;
        }
      }
    }
  }
  .bottom-bg {
    .content {
      max-width: 1152px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -135px;
      .right-icon {
        transform: rotate(180deg);
      }
      .main-content {
        width: 80%;
        min-height: 270px;
        box-shadow: 0px 3px 16px #77777729;
        background: white;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .five-star {
          margin: auto;
        }
        .internal-main-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          .text {
            color: #6f6c7f;
            padding: 0 50px;
            font-size: 14px;
          }
          .user {
            display: flex;
            gap: 16px;
            margin: auto;
            .user-detail {
              .position {
                color: #6f6c7f;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
  .features {
    max-width: 1152px;
    margin: 60px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    .feature-card {
      box-shadow: 0px 3px 16px #77777729;
      border-radius: 8px;
      padding: 24px;
      .card-title {
        font: normal normal medium 18px/27px Poppins;
        letter-spacing: 0px;
        color: #36324a;
        margin-top: 16px;
      }
      .card-sub-title {
        font: normal normal 300 14px/21px Poppins;
        letter-spacing: 0px;
        color: #6f6c7f;
        margin-top: 13px;
      }
    }
  }
}
</style>
