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
        </div>
        <div class="price-cards">H</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showMonthlyPrice: true,
  }),
}
</script>

<style lang="scss" scoped>
.how-it-works {
  .content {
    max-width: 1152px;
    margin: auto;
    padding: 60px 75px 60px;
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
      .switch-card {
        flex-grow: 1;
        .switch {
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: 0px 3px 24px #0000001c;
          border-radius: 34px;
          display: flex;
          border-radius: 34px;
          position: relative;
          height: 68px;
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
        }
      }
      .price-cards {
        flex-grow: 2;
      }
    }
  }
}
</style>
