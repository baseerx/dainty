<template>
  <section class="pricing-table">
    <div id="pricing-table-headliner" class="pricing-table_headliner">
      <h2>Features Comparison</h2>
      <p>Compare our plans and select the best for your business</p>
    </div>

    <table>
      <thead>
        <tr>
          <th class="pricing-features_table-row-heading"></th>
          <th class="pricing-features_table-row-heading">Core</th>
          <th class="pricing-features_table-row-heading">Plus</th>
          <th class="pricing-features_table-row-heading">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, service, option1, option2, option3 } in pricingTable" :key="id">
          <td class="pricing-features_table-cell">{{ service }}</td>

          <td class="pricing-features_table-cell" v-if="option1 === true"><check-icon /></td>
          <td v-else>{{ option1 ? option1 : null }}</td>
          <td class="pricing-features_table-cell" v-if="option2 === true"><check-icon /></td>
          <td v-else>{{ option2 ? option2 : null }}</td>
          <td class="pricing-features_table-cell" v-if="option3 === true"><check-icon /></td>
          <td v-else>{{ option3 ? option3 : null }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import pricingTable from "../static/data/pricing-table-content-new.json"
import checkIcon from "./home/plans/check-icon.vue"
export default {
  components: { checkIcon },
  data() {
    return {
      pricingTable,
      headings: ["Core", "Plus", "Enterprise"],
    }
  },
  // async fetch() {
  //   this.pricingTable = await this.$content("pricing-table-content").fetch()
  // },
}
</script>

<style lang="scss" scoped>
.pricing-table {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 6rem 2rem;

  @screen sm {
    padding: 3rem 2rem;
  }
}

.pricing-table_headliner {
  text-align: center;
  margin: 3rem 0;

  h2 {
    margin-bottom: 30px;
  }
}

table {
  position: relative;
  @apply table-fixed;
  width: 100%;
}

table,
td,
th {
  border-bottom: 2px solid #eef2f6;
}

th {
  position: sticky;
  top: 90px;
  z-index: 3;
  font-size: 20px;
  text-align: left;
  line-height: 75px;
  @apply text-darkColor;
  background: #fff;

  @screen md {
    font-size: 16px;
  }

  @screen sm {
    top: 8vh;
  }
}

.pricing-features_table-row-heading,
.pricing-features_table-row-sub-heading {
  text-align: left;
}

.pricing-features_table-row-heading {
  text-transform: capitalize;

  @screen sm {
    line-height: 1;
    padding: 1.3rem 0;
  }
}

.pricing-features_table-heading {
  line-height: 60px;
  font-weight: 700;
}

.pricing-features_table-row-sub-heading {
  z-index: 0 !important;
  padding-left: 32px;
  font-size: 15px;
  opacity: 0.8;
  white-space: nowrap;

  @screen md {
    font-size: 12px;
  }

  @screen sm {
    white-space: normal;
    line-height: normal;
    padding-left: 16px;
  }
}

.pricing-features_table-column-heading {
  text-align: center;
  width: 220px;
  color: rgba(54, 50, 74, 0.8);
  font-weight: 500 !important;

  @screen md {
    width: 100px;
  }

  @screen sm {
    width: 60px;
    line-height: 1.5rem;
  }
}

.pricing-features_table-cell {
  padding: 18px 0;
  text-align: rig;
  @apply text-lightColor;
  @apply text-base;

  > span {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @screen md {
    font-size: 11px;
  }
}
</style>
