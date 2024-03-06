<!-- Home.vue -->
<template>
  <div class="content">
    <h1>Projects</h1>
    <p>(Ordered by interest)</p>

    <ProjectLinkComponent linkText="SRT Program" routerLink="/projects/srt-program">
      <template v-slot:details>
        <ul>
          <li>Program for tracking dynamic attendance for schools</li>
          <li>Implements admin, teacher and student logins</li>
          <li>Tracks "sign-outs" for students and enables requests</li>
        </ul>
      </template>
    </ProjectLinkComponent>

    <ProjectLinkComponent linkText="Dactyl Manuform Build" routerLink="/projects/dactyl-manuform">
      <template v-slot:details>
        <ul>
          <li>Dactyl Manuform 4x5 keyboard build</li>
          <li>RGB backlight and custom layering using QMK</li>
          <li>Build journey and parts list</li>
        </ul>
      </template>
    </ProjectLinkComponent>

    <ProjectLinkComponent linkText="Minecraft Server" routerLink="/projects/mcserver">
      <template v-slot:details>
        <ul>
          <li>Linux Hosted Minecraft server configuration</li>
          <li>Startup scripts and ideas</li>
        </ul>
      </template>
    </ProjectLinkComponent>

    <ProjectLinkComponent linkText="Wireless LED Display" routerLink="/projects/wireless-grid">
      <template v-slot:details>
        <ul>
          <li>Senior Design project at Purdue</li>
          <li>Configurable wireless LED grids</li>
          <li>Bluetooth app to control each grid</li>
        </ul>
      </template>
    </ProjectLinkComponent>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ProjectLinkComponent from '@/components/ProjectLinkComponent.vue'

export default defineComponent({
  name: 'ProjectsView',
  components: {
    ProjectLinkComponent
  }
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  width: var(--content-max-width);
  align-items: center;
}
</style>
