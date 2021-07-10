<template>
  <div class="website-maintenance">
    <maintenance-header />
    <maintenance-who-we-are />
    <maintenance-small-section />
    <maintenance-how-it-works />
    <maintenance-ways />
  </div>
</template>

<script>
import MaintenanceHeader from "../components/services/maintenance-header.vue"
import MaintenanceWhoWeAre from "../components/services/maintenance-who-we-are.vue"
import MaintenanceSmallSection from "../components/services/maintenance-small-section.vue"
import MaintenanceHowItWorks from "../components/services/maintenance-how-it-works.vue"
import MaintenanceWays from "../components/services/maintenance-ways.vue"
export default {
  components: {
    MaintenanceHeader,
    MaintenanceWhoWeAre,
    MaintenanceSmallSection,
    MaintenanceHowItWorks,
    MaintenanceWays,
  },
}
</script>
