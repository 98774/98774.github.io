<template>
  <div>
    <ProjectInfo
      projectTitle="Maze Runner"
      githubLink="https://github.com/98774/ECE362_miniproject.git"
    >
      <template v-slot:summary
        ><p>
          This is a project I completed at Purdue for my embedded systems class. How many times can
          you run the Maze?
        </p>
      </template>

      <template v-slot:detailed-description>
        This game is wired to use an STM32 microprocessor hooked up to a small TFT display to run a
        maze runner game. The goal of the game is to navigate the maze before the timer runs out.
        Each time the player completes the maze, the timer decreases. High scores are tracked and
        the controls are easy to use. Using the audio jack, a player can listen to the soundtrack.
        Music plays from an SD card and multiple sample rates and sizes work. I designed the sd card
        driver myself.

        <p></p>

        <img style="max-width: 100%" src="@/assets/project/maze-runner/maze-runner.jpg" />
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
