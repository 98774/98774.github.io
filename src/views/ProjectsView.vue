<!-- Home.vue -->
<template>
  <div class="content">
    <h1>Projects</h1>

    <ProjectLinkComponent linkText="Dactyl Manuform Build" routerLink="/projects/dactyl-manuform">
      <template v-slot:details>
        <div>Dactyl Manuform 4x5 keyboard build</div>
        <div>RGB backlight and custom layering using QMK</div>
        <div>Build journey and parts list</div>
      </template>
    </ProjectLinkComponent>

    <ProjectLinkComponent linkText="Minecraft Server" routerLink="/projects/mcserver">
      <template v-slot:details>
        <div>Linux Hosted Minecraft server configuration</div>
        <div>Startup scripts and ideas</div>
      </template>
    </ProjectLinkComponent>

    <ProjectLinkComponent linkText="Wireless LED Display" routerLink="/projects/wireless-grid">
      <template v-slot:details>
        <div>Dactyl Manuform 4x5 keyboard build</div>
        <div>RGB backlight and custom layering using QMK</div>
        <div>Build journey and parts list</div>
      </template>
    </ProjectLinkComponent>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ProjectLinkComponent from '@/components/ProjectLinkComponent.vue' // Adjust the path based on your project structure

export default defineComponent({
  name: 'ProjectsView',
  components: {
    ProjectLinkComponent
  }
})
</script>

<style>
.content {
  width: var(--content-max-width);
}

.heading {
  text-align: center;
}
</style>
