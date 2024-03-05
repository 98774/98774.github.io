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
  height: 120px;
  width: calc(var(--content-max-width));
}

.detail {
  flex-direction: column;
  flex-grow: 1;
  text-align: right;
  overflow: hidden;
  max-width: 0;
  max-height: 100px;
  transition: all 0.5s;
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
  margin: calc(3 *var(--default-margin));

}

.container:hover .project-link {
  background-color: var(--highlight-background);
  color: var(--accent-color-3);
}

</style>
