<template>
  <div class="content-panel project-info">
    <h1>{{ projectTitle }}</h1>
    <slot name="summary"></slot>
    <a v-if="githubLink" href="githubLink" target="_blank" rel="noopener noreferrer"
      >GitHub Repository</a
    >

    <div class="">
      <slot name="detailed-description"></slot>
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
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  gap: 2px;
}

.content-panel {
  padding-left: 3%;
  padding-right: 3%;
  opacity: 90%;
}
</style>
