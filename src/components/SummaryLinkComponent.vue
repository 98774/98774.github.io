<template>
  <routerLink :to="routerLink">
    <div class="container">
      <div class="heading">
        <div class="nav-link">{{ linkText }}</div>
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

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 110px;
  border-radius: var(--default-border-radius);
}

.heading {
  max-width: 100%;
  flex-grow: 1;
  transition: all 0.3s;
}

.detail {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
  overflow: hidden;
  max-width: 0;
  max-height: 100px;
  transition: all 0.3s;
  justify-content: center;
  align-items: center;
}

.container:hover {
  background-color: var(--default-panel-background);
  opacity: var(--default-opacity);
  width: calc(var(--content-max-width) * 0.8);
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.container:hover .detail {
  max-width: 70%;
}

.container:hover .nav-link {
  color: var(--accent-color-2);
  background-color: transparent;
}
</style>
