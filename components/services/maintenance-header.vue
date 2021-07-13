<template>
  <div class="maintenance-header">
    <img class="maintenance-bg1" src="/services/maintenance1-web.png" />
    <img class="maintenance-bg2" src="/services/maintenance2.png" />
    <div class="content">
      <h4>Website Maintenance</h4>
      <div class="content-group">
        <div class="left-group">
          <h3>
            Imagine never having another <br />
            <div class="heading">
              <span>WordPress headache... </span><img class="emoticon" src="/services/emoji1.png" />
            </div>
          </h3>
          <div class="desc">
            With 24/7 access to the world's best developers for unlimited small jobs, where will you
            spend your new found time?
          </div>
          <nuxt-link to="/">Sign up today</nuxt-link>
        </div>
        <div class="right-group">
          <div class="msg-box">
            affordable and fast turnaround
            <img class="emoticon" src="/services/msg-1.svg" />
          </div>
          <div class="msg-box right">
            Awesome as always
            <img class="emoticon" src="/services/msg-2.svg" />
          </div>
          <div class="msg-box">
            <div>Creative deliverables</div>
            <img class="emoticon" src="/services/msg-3.png" />
          </div>
          <div class="checkout-text">
            <div class="border"></div>
            Check out our Work
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.maintenance-header {
  position: relative;
  margin-top: 102px;
  padding-bottom: 150px;
  .maintenance-bg1 {
    position: absolute;
  }
  .maintenance-bg2 {
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 100%;
  }
  .content {
    max-width: 1152px;
    margin: auto;
    h4 {
      text-align: center;
      padding: 90px 47px 45px;
      color: var(--acc-pink-color);
    }
    @screen md {
      padding: 0 5%;
    }
    .content-group {
      display: flex;
      flex-wrap: wrap;
      .left-group {
        width: 50%;
        @screen sm {
          width: 100%;
        }
        h3 {
          font-weight: 300;
          color: #6f6c7f;
          .heading {
            color: #36324a;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
          }
        }
        span {
          font-weight: 600;
        }
        .desc {
          color: #6f6c7f;
          margin: 30px 0 65px;
          line-height: 35px;
        }
        a {
          border: 1px solid var(--acc-pink-color);
          padding: 10px 15px;
          border-radius: 8px;
          &:hover {
            border: 1px solid var(--acc-purple-color);
            background: var(--acc-purple-color);
            color: white;
          }
        }
      }
      .right-group {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding-left: 15%;
        @screen sm {
          width: 100%;
        }
        .msg-box {
          background: white;
          box-shadow: 2px 2px 24px #bcbcbc45;
          border: 1px solid #00000000;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 25px;
          width: fit-content;
        }
        .msg-box.right {
          margin: 0 0 0 auto;
        }
        .checkout-text {
          display: flex;
          align-items: center;
          gap: 15px;
          .border {
            border: 1px solid #707070;
            width: 40px;
          }
        }
      }
      .emoticon {
        height: 24px;
        width: auto;
      }
    }
  }
}
</style>
