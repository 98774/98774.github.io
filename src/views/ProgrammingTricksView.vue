<template>
  <div class="content">
    <h1>Tips and Tricks</h1>
    <p>This page aims to be a long-term source for useful technical tricks I pick up.</p>
    <section class="content-panel">
      <h2>Open-source Software:</h2>
      <BasicLinkComponent
        name="Neovim"
        link="https://neovim.io/"
        description="Neovim is a fork of Vim that aims to expand functionality"
      />
      <BasicLinkComponent
        name="Neovim"
        link="https://neovim.io/"
        description="Neovim is a fork of Vim that aims to expand functionality"
      />
      <BasicLinkComponent
        name="Neovim"
        link="https://neovim.io/"
        description="Neovim is a fork of Vim that aims to expand functionality"
      />
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BasicLinkComponent from '@/components/BasicLinkComponent.vue'

export default defineComponent({
  name: 'ProgrammingTricksView',
  components: {
    BasicLinkComponent
  }
})
</script>

<style scoped>
/* Add your view-specific styles here */
</style>
