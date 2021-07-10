<template>
  <div class="small-section">
    <img src="/services/small-section.png" class="bg-img" />
    <div class="content">
      <h5 class="text">
        Our developers are available 24/7 to fix any small jobs,<br />
        on the same day, from $79 /month.
      </h5>
      <div class="button-cover">
        <nuxt-link to="/">Sign up today</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.small-section {
  margin: auto;
  position: relative;
  .bg-img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .content {
    margin: auto;
    max-width: 1152px;
    height: 200px;
    display: flex;
    align-items: center;
    gap: 200px;
    .text {
      color: #fff;
      line-height: 35px;
    }
    .button-cover {
      a {
        border: 1px solid var(--acc-pink-color);
        padding: 10px 75px;
        border-radius: 8px;
        background: white;
        &:hover {
          border: 1px solid var(--acc-purple-color);
          background: var(--acc-pink-color);
          color: white;
        }
      }
    }
  }
}
</style>
