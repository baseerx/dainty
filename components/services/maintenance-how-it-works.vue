<template>
  <div class="how-it-works">
    <div class="content">
      <h3>How it works</h3>
      <div class="h3-border-bottom"></div>
      <div class="sub-text">
        We can fix any small issue you request and improve your site in a number of ways. Here's how
        it works:
      </div>
      <img src="/services/how-it-works.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.how-it-works {
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
    .sub-text {
      color: #6f6c7f;
    }
    img {
      width: 100%;
      margin: 85px 0 35px;
    }
  }
}
</style>
