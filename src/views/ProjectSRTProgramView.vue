<!-- ParentComponent.vue -->

<template>
  <div>
    <ProjectInfo projectTitle="Dynamic Scheduler">
      <template v-slot:summary> </template>

      <template v-slot:detailed-description>
        <p>
          Dynamic scheduler is my longest running and largest project to date. This program
          provideds school districts with an interface for creating dynamic scheduling records for
          student resource times. For more information, check out our website at
          <a href="https://feljon.org" target="_blank">feljon.org</a>.
        </p>
        <p>
          Dynamic Scheduler has gone through two iterations. Back in 2016 I first created a version
          for my high school in partnership with Felix Perez Diener. Following a few years of on the
          side development and time spent working with the Goshen High School administration, we
          rolled out "The SRT Program". This version of the program was written as you might expect
          two high schoolers with minimal understanding of design to write a program... poorly. But,
          it worked. GHS used the program for a few years until the school district decided to
          terminate the SRT class period altogether. We like to imagine the program was so bad that
          it pushed the adminstration to remove the class!
        </p>
        <p>
          In 2024, Northride High School reached out about developing a similar program for their
          school district. After leaving the idea on the back burner for so long, I was excited to
          begin development again. Over that year, I worked in partnership with the Northridge
          administration and staff to develop a program that would meet their needs. This second
          iteration, Dynamic Scheduler, became the much improved spiritual successor to the SRT
          Program. We kept a lot of the original design, but made it so much better. Using a new
          stack built on Next.js, we created a REACTive front end and an update MySQL database for
          the backend. We also added many features for customization and ease of use. The program
          was a hit and the school district continues to use it today.
        </p>
        <p>
          Dynamic Scheduler is not currently open source but I am open to partnerships and
          opportunities to use it for the benefit of students and staff everywhere. Feel free to
          reach out if you know of a teacher or school district who could benefit.
        </p>
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
