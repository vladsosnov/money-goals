<template>
  <section>
    <goal-card />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import GoalCard from '@/components/Goals/GoalCard.vue'

export default Vue.extend({
  name: 'GoalsList',
  components: {
    GoalCard
  }
})
</script>
