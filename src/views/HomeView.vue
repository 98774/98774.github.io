<template>
  <div class="welcome-panel">
    <div class="content">
      <h1>Hi, I'm Jonathon Shirk Snyder</h1>
      <p>Welcome to my site! Have a look around and sip some tea &#127861;</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WelcomePanel'
})
</script>

<style scoped>
.welcome-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh; /* Centers it vertically within the viewport */
  opacity: var(--default-opacity);
  color: var(--light-grey);
  text-align: center;
  padding: var(--default-padding);
}

.content {
  background: var(--default-panel-background);
  padding: 2rem;
  border-radius: var(--default-border-radius);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
}

h1 {
  font-size: calc(1.2 * var(--header-font-size));
  color: var(--light-grey);
  margin-bottom: 1rem;
}

p {
  font-size: var(--content-font-size);
  color: var(--accent-color-2);
}
</style>
