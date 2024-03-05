<!-- BioComponent.vue -->

<template>
  <routerLink :to="routerLink">
    <div class="container">
      <div class="heading">
        <div class="project-link">{{ linkText }}</div>
      </div>
      <div class="detail">
        <slot name="details"></slot>
      </div>
    </div>
  </routerLink>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  props: {
    routerLink: String,
    linkText: String
  }
})
</script>

<style scoped>npm
.project-link {
  color: var(--accent-color-3);
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 120px;
  width: calc(0.8 * var(--content-max-width));
}

.detail {
  flex-direction: column;
  flex-grow: 1;
  text-align: right;
  margin: calc(3 *var(--default-margin));
  overflow: hidden;
  max-width: 0;
  max-height: 100px;
  transition: all 0.3s;
}

.container:hover {
  border: 2px solid var(--highlight-color);
  border-radius: 10px;
  background-color: var(--highlight-background);
  width: calc(var(--content-max-width) * 0.8);
  cursor: pointer;
}
.container:hover .detail {
  color: var(--accent-color-3);
  max-width: calc(100% - 200px);
  display: flex;
}

.container:hover .project-link {
  background-color: var(--highlight-background);
  font-weight: 999;
  color: var(--highlight-color);
}

</style>
