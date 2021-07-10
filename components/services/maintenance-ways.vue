<template>
  <div class="how-it-works">
    <div class="top-bg">
      <div class="content">
        <h3>Here are just a few ways that we can help you...</h3>
        <div class="h3-border-bottom"></div>
        <div class="sub-text">
          We can fix any small issue you request and improve your site in a number of ways. A few
          examples include:
        </div>
        <div class="cards">
          <div class="card" v-for="card in cards" :key="card.title">
            <img :src="card.img" class="card-img" />
            <div class="card-title">{{ card.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card1 from "../../static/services/card1.svg"
import card2 from "../../static/services/card2.svg"
import card3 from "../../static/services/card3.svg"
import card4 from "../../static/services/card4.svg"
import card5 from "../../static/services/card5.svg"
import card6 from "../../static/services/card6.svg"
import card7 from "../../static/services/card7.svg"
export default {
  data: () => ({
    cards: [
      { title: "Stop Site Hacking", img: card1 },
      { title: "Boost your brand", img: card2 },
      { title: "Boost conversion", img: card3 },
      { title: "Speed up your site", img: card4 },
      { title: "Grow your business traffic", img: card5 },
      { title: "Increase search engine traffic", img: card6 },
      { title: "Reduce your bounce rate", img: card7 },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.how-it-works {
  .top-bg {
    background: #f3fbff 0% 0% no-repeat padding-box;
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
        justify-content: center;
        gap: 30px;
        margin-top: 65px;
        .card {
          box-shadow: 0px 3px 16px #77777729;
          width: 22%;
          border-radius: 8px;
          background: white;
          .card-img {
            width: 80px;
            margin: auto;
            padding: 10px 0 0;
          }
          .card-title {
            color: #36324a;
            margin: 0 15% 24px;
          }
        }
      }
    }
  }
}
</style>
