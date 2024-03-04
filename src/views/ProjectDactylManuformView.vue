<!-- ParentComponent.vue -->

<template>
    <div>
      <ProjectInfo projectTitle="Dactyl Manuform" githubLink="https://github.com/98774/qmk_firmware.git">
        <template v-slot:summary>
          <p>Here I document my findings while building a dactyl mauform keyboard. All QMK code is available in the repository.</p>

        </template>
        
        <template v-slot:detailed-description>
        <section>
                <h2>Major featurs:</h2>
          <ul>
            <li>Custom firmware using QMK</li>
            <li>RGB keys</li>
            <li>3D printed case with laser cut base</li>
            <li>LED display for keyboard information</li>
          </ul>
               </section>
            <section>
            <h2>Parts list:</h2>
            <ul>
                
            </ul>
          </section>
          <p>This is the detailed description.</p>

        </template>
      </ProjectInfo>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ProjectInfo from '@/components/ProjectInfoComponent.vue'; // Adjust the path based on your project structure
  
  export default defineComponent({
    name: 'ParentComponent',
    components: {
      ProjectInfo,
    },
  });
  </script>
  
  <!-- Add styling for ParentComponent if needed -->
  <style scoped>
  /* ... */
  </style>
  