<template>
  <div class="how-it-works">
    <div class="content">
      <h3>Choose a monthly plan that suits you</h3>
      <div class="h3-border-bottom"></div>
      <div class="sub-text">
        Get started now and our expert team will perform an 18 point site review for free ($99
        value)<br />
        as a bonus for signing up on a monthly plan.
      </div>
      <div class="cards">
        <div class="switch-card">
          <div class="switch">
            <div
              :class="`switch-text ${showMonthlyPrice ? 'active' : ''}`"
              @click="showMonthlyPrice = true"
            >
              Monthly
            </div>
            <div
              :class="`switch-text ${showMonthlyPrice ? '' : 'active'}`"
              @click="showMonthlyPrice = false"
            >
              Yearly
            </div>
            <div :class="`switch-button ${showMonthlyPrice ? '' : 'right'}`"></div>
          </div>
          <img class="right-curve" src="/services/right-curve.png" />
          <div class="switch-text">Switch to yearly to get 10% OFF on all plans</div>
        </div>
        <div class="price-cards">
          <div class="price-card" v-for="price in prices.monthly" :key="price.name">
            <h4>{{ price.name }}</h4>
            <div class="underline"></div>
            <span class="price"
              >$
              <h2>{{ price.price }}</h2></span
            >
            <div class="price-text">USD per month</div>
            <div class="price-info-text">Minimum 3 months signup</div>
            <div class="button-cover">
              <nuxt-link to="/">Sign up today</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showMonthlyPrice: true,
    prices: {
      monthly: [
        { name: "Standard", price: "79" },
        { name: "Professional", price: "99" },
        { name: "VIP", price: "199" },
      ],
    },
  }),
}
</script>

<style lang="scss" scoped>
.how-it-works {
  @apply my-16;
  .content {
    max-width: 1152px;
    margin: auto;
    // padding: 60px 75px 60px;
    text-align: center;
    .h3-border-bottom {
      width: 40px;
      border: 1px solid var(--acc-purple-color);
      margin: 12px auto 25px;
    }
    .sub-text {
      color: #6f6c7f;
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      background: #f3fbff;
      @apply my-8;
      .switch-card {
        max-width: 30%;
        padding: 70px;
        .switch {
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: 0px 3px 24px #0000001c;
          border-radius: 34px;
          display: flex;
          border-radius: 34px;
          position: relative;
          height: 68px;
          box-shadow: 0px 3px 24px #0000001c;
          width: 212px;
          .switch-button {
            position: absolute;
            border-radius: inherit;
            background: var(--acc-purple-color);
            width: 88px;
            height: 44px;
            z-index: 1;
            left: 16px;
            top: 12px;
            transition: all 0.3s ease;
          }
          .switch-button.right {
            left: 104px;
          }
          .switch-text {
            width: 88px;
            height: 44px;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
            top: 12px;
            left: 16px;
            transition: all 0.3s ease;
            font-size: 14px;
            &:nth-child(2) {
              left: 104px;
            }
            &:hover {
              cursor: pointer;
            }
          }
          .switch-text.active {
            color: white;
          }
        }
        .right-curve {
          margin-left: auto;
          margin-top: 12px;
        }
        .switch-text {
          font-size: 14px;
          color: #36324a;
          text-align: center;
        }
      }
      .price-cards {
        width: 70%;
        display: flex;
        .price-card {
          width: 33%;
          padding: 24px;
          text-align: left;
          .underline {
            width: 20px;
            border: 2px solid #5b39c9;
          }
          .price {
            display: flex;
            color: var(--acc-purple-color);
            @apply my-3;
            gap: 8px;
            h2 {
              color: var(--acc-purple-color);
              margin-top: -5px;
            }
          }
          .price-text {
            color: #36324a;
            font-size: 14px;
            @apply my-3;
          }
          .price-info-text {
            color: #6f6c7f;
            font-size: 14px;
            @apply my-3;
          }
          .button-cover {
            width: 100%;
            @apply py-4;
            a {
              display: block;
              text-align: center;
              width: 100%;
              background: var(--acc-purple-color);
              border-radius: 8px;
              color: white;
              @apply p-2;
              &:hover {
                background: var(--acc-pink-color);
                color: white;
              }
            }
          }
        }
        .price-card:nth-child(2) {
          background: var(--acc-purple-color);
          h4 {
            color: white;
          }
          .underline {
            border: 2px solid white;
          }
          .price {
            color: white;
            h2 {
              color: white;
            }
          }
          .price-info-text,
          .price-text {
            color: white;
          }
          a {
            background: white;
            color: var(--acc-purple-color);
          }
        }
      }
    }
  }
}
</style>
