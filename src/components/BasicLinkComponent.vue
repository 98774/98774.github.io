<template>
  <div class="horizontal-flex">
    <p class="description">
      <a target="_blank" rel="noopener noreferrer" :href="link">{{ name }}</a> -- {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  props: {
    name: String,
    link: String,
    description: String
  }
})
</script>

<style scoped>
.horizontal-flex {
  justify-content: start;
  align-items: center;
  height: 40px;
}
</style>
