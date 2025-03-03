<!-- Home.vue -->
<template>
  <div class="content">
    <p></p>
    <SummaryLinkComponent linkText="Dynamic Scheduler" routerLink="/projects/srt-program">
      <template v-slot:details>
        <ul>
          <li>Program for tracking dynamic attendance</li>
          <li>Implements custom user permissions</li>
          <li>Built with Next.js, React, and MySQL</li>
        </ul>
      </template>
    </SummaryLinkComponent>

    <SummaryLinkComponent linkText="Wireless LED Display" routerLink="/projects/wireless-grid">
      <template v-slot:details>
        <ul>
          <li>Senior Design project at Purdue</li>
          <li>Configurable wireless LED grids</li>
          <li>Bluetooth app to control each grid</li>
        </ul>
      </template>
    </SummaryLinkComponent>
    <SummaryLinkComponent linkText="Dactyl Manuform Build" routerLink="/projects/dactyl-manuform">
      <template v-slot:details>
        <ul>
          <li>Dactyl Manuform 4x5 keyboard build</li>
          <li>RGB backlight and custom layering using QMK</li>
          <li>Build journey and parts list</li>
        </ul>
      </template>
    </SummaryLinkComponent>

    <SummaryLinkComponent linkText="Minecraft Server" routerLink="/projects/mcserver">
      <template v-slot:details>
        <ul>
          <li>Linux Hosted Minecraft server configuration</li>
          <li>Startup scripts</li>
        </ul>
      </template>
    </SummaryLinkComponent>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SummaryLinkComponent from '@/components/SummaryLinkComponent.vue'

export default defineComponent({
  name: 'ProjectsView',
  components: {
    SummaryLinkComponent
  }
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    list-style-type: disc;
  }
}
</style>
