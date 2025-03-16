<template>
  <div class="content-panel">
    <div class="project-info">
      <h1>{{ projectTitle }}</h1>
      <slot name="summary"></slot>
      <a v-if="githubLink" :href="githubLink" target="_blank" rel="noopener noreferrer"
        >GitHub Repository</a
      >

      <div class="">
        <slot name="detailed-description"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectInfoComponent',
  props: {
    projectTitle: String,
    githubLink: String
  }
})
</script>

<style scoped>
.project-info {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2px;
  overflow: auto;
  opacity: 1;
}
</style>
