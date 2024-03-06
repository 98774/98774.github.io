<!-- ParentComponent.vue -->

<template>
  <div>
    <ProjectInfo
      projectTitle="Wireless LED Display"
      githubLink="https://github.com/98774/qmk_firmware.git"
    >
      <template v-slot:summary>
        <p></p>
      </template>

      <template v-slot:detailed-description>
        <section>
          <h2>Major featurs:</h2>
        </section>
        <section>
          <h2>Parts list:</h2>
          <ul></ul>
        </section>
        <p>This is the detailed description.</p>
      </template>
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
