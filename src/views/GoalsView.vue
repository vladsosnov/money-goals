<template>
  <main>
    Your Goals
    <goals-list />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import GoalsList from '@/components/Goals/GoalsList.vue'

export default Vue.extend({
  name: 'GoalsView',
  components: {
    GoalsList
  }
})
</script>
