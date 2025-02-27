<!-- ParentComponent.vue -->

<template>
  <div>
    <ProjectInfo
      projectTitle="Minecraft Server"
      githubLink="https://github.com/98774/mcserver.git"
    >
      <template v-slot:summary
        ><p>
          This is the server configuraiton I use for my minecraft server. It automatically restarts
          and hosts a screen session for easy viewing of the console.
        </p>
      </template>

      <template v-slot:detailed-description> </template>
    </ProjectInfo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectInfo from '@/components/ProjectInfoComponent.vue' // Adjust the path based on your project structure

export default defineComponent({
  name: 'ParentComponent',
  components: {
    ProjectInfo
  }
})
</script>
