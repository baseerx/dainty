<template>
  <div class="website-maintenance">
    <maintenance-header />
    <maintenance-who-we-are />
    <maintenance-small-section v-bind="section1" />
    <maintenance-how-it-works />
    <maintenance-ways />
    <maintenance-small-section v-bind="section2" />
    <maintenance-pricing />
  </div>
</template>

<script>
import MaintenanceHeader from "../components/services/maintenance-header.vue"
import MaintenanceWhoWeAre from "../components/services/maintenance-who-we-are.vue"
import MaintenanceSmallSection from "../components/services/maintenance-small-section.vue"
import MaintenanceHowItWorks from "../components/services/maintenance-how-it-works.vue"
import MaintenanceWays from "../components/services/maintenance-ways.vue"
import MaintenancePricing from "../components/services/maintenance-pricing.vue"
export default {
  components: {
    MaintenanceHeader,
    MaintenanceWhoWeAre,
    MaintenanceSmallSection,
    MaintenanceHowItWorks,
    MaintenanceWays,
    MaintenancePricing,
  },
  data: () => ({
    section1: {
      text: `Our developers are available 24/7 to fix any small jobs,<br />on the same day, from $79 /month.`,
      btnText: "Sign up today",
    },
    section2: {
      text: `We offer a 30 day money back<br />satisfaction guarantee`,
      btnText: "Let's do this",
    },
  }),
}
</script>
