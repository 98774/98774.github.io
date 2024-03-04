<!-- ProjectInfo.vue -->

<template>
    <div class="project-info">
      <h1>{{ projectTitle }}</h1>
      <div class="summary">
        <slot name="summary"></slot>
        <a :href="githubLink" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
      <div class="content-panel">
        <slot name="detailed-description"></slot>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ProjectInfoComponent',
    props: {
      projectTitle: String,
      githubLink: String,
    },
  });
  </script>
  
  <style scoped>
  .project-info {
    max-width: var(--content-max-width);
  }

  .summary, .content-panel {
    border: 2px solid var(--grey);
    margin: var(--default-margin);
    padding: calc(2 * var(--default-padding));
    border-radius: 10px;
  }

  .content-panel {
    margin-top: calc(var(--default-margin) * 4);
    text-align: left;
  }
  
  /* Add more styling based on your design preferences */
  </style>
  