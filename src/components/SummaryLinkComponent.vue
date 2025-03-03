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
  padding: 10px;
  transition:
    background-color 0.3s 0.1s ease,
    box-shadow 0.1s 0.1s ease,
    width 0.5s 0.1s ease;
}

.heading {
  flex-grow: 1;
  max-width: 100%;
  transition:
    transform 0.4s 0.1s ease-in-out,
    color 0.4s 0.1s ease-in-out;
}

.nav-link {
  transition:
    transform 0.4s 0.1s ease-in-out,
    color 0.4s 0.1s ease-in-out;
}

.detail {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
  overflow: hidden;
  max-height: 100px;
  max-width: 0;
  opacity: 0;
  transition:
    max-width 0.3s ease-in,
    opacity 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  color: transparent;
}

.container:hover {
  background-color: var(--default-panel-background);
  box-shadow: var(--default-box-shadow);
  width: calc(var(--content-max-width) * 0.8);
  opacity: var(--default-opacity);
}

.container:hover .heading {
  transform: translateX(-10px);
}

.container:hover .detail {
  max-width: 50%;
  opacity: 1;
  color: var(--white);
}

.container:hover .nav-link {
  color: var(--accent-color-2);
}
</style>
