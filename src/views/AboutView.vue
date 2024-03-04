<template>
  <div>
    <h1>About Me</h1>
    <BioComponent />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BioComponent from '@/components/BioComponent.vue'; // Adjust the path based on your project structure

export default defineComponent({
  name: 'AbouteView',
  components: {
    BioComponent,
  },
});
</script>

<style scoped>
/* Add your view-specific styles here */
</style>