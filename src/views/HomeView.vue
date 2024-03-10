<!-- Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <div class="panel">
      <p>
        Welcome to my site! Feel free to explore and <a href="/contact">reach out</a> if you have
        any questions!
      </p>
    </div>
    <div class="vertical-flex">
      <SummaryLinkComponent linkText="Programming Tricks" routerLink="/home/programming-tricks">
        <template v-slot:details>
          <p>Here you'll find a list of programming tricks and tips</p>
        </template>
      </SummaryLinkComponent>
      <SummaryLinkComponent linkText="Drone Photography" routerLink="/home/drone-photos">
        <template v-slot:details>
          <p>I have dabbled in drone photography...</p>
        </template>
      </SummaryLinkComponent>
      <SummaryLinkComponent linkText="Book List" routerLink="/home/book-list">
        <template v-slot:details>
          <p>Books I've read or plan to read</p>
        </template>
      </SummaryLinkComponent>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SummaryLinkComponent from '@/components/SummaryLinkComponent.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    SummaryLinkComponent
  }
})
</script>

<style scoped></style>
