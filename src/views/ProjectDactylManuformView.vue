<!-- ParentComponent.vue -->

<template>
    <div>
      <ProjectInfo projectTitle="Dactyl Manuform" githubLink="https://github.com/98774/qmk_firmware.git">
        <template v-slot:summary>
          <p>Here I document my findings while building a 
            <a href="https://www.google.com/search?sca_esv=6416c49529b0d5b1&sxsrf=ACQVn08YaMqSmNyxyHYJ6-tJ7vE59Xx7yw:1709590683343&q=dactyl+manuform&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwix45DL0duEAxUyN2IAHRN8D9wQ0pQJegQIDRAB&biw=1920&bih=939&dpr=1">
              Dactyl ManuForm
            </a>
            keyboard. All QMK code is available in the repository.</p>

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