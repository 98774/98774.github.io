<!-- ParentComponent.vue -->

<template>
  <div>
    <ProjectInfo projectTitle="SRT Program">
      <template v-slot:summary>
        <p>
          The SRT program is my longest running and largest project to date. This program provideds
          school districts with an interface for creating dynamic scheduling records for student
          resource times. For more information, check out our website at
          <a href="https://feljon.org" target="_blank">feljon.org</a>.
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
