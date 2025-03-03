<template>
  <div class="content">
    <h1>Tips and Tricks</h1>
    <p>
      This page is a growing resource of practical technical tips and tools that I find useful over
      time.
    </p>

    <section class="content-panel">
      <h2>Open-source Software</h2>
      <p>
        Below are some of the open source software tools that have had a large impact on my
        development journey
      </p>

      <BasicLinkComponent
        name="Neovim"
        link="https://neovim.io/"
        description="A fork of Vim focused on extensibility and user-friendly configuration."
      />
      <BasicLinkComponent
        name="React"
        link="https://react.dev/"
        description="A JavaScript library for building user interfaces, maintained by Meta."
      />
      <BasicLinkComponent
        name="Docker"
        link="https://www.docker.com/"
        description="An open platform for developing, shipping, and running applications in containers."
      />
      <BasicLinkComponent
        name="MariaDB"
        link="https://mariadb.org/"
        description="A community-developed fork of MySQL that remains free and open-source."
      />
      <BasicLinkComponent
        name="Buildroot"
        link="https://buildroot.org/"
        description="A simple, efficient, and flexible tool for generating embedded Linux systems."
      />
      <BasicLinkComponent
        name="Debian"
        link="https://www.debian.org/"
        description="A popular Linux distribution that serves as a base for many other systems, including Ubuntu."
      />
      <BasicLinkComponent
        name="Git"
        link="https://git-scm.com/"
        description="A distributed version control system to track changes in source code."
      />
    </section>
    <section class="content-panel">
      <h2>Linux Commands</h2>
      <p>Frequently used commands an references</p>
    </section>

    <section class="content-panel">
      <h2>Programming Tricks</h2>
      <p>Useful features for programming</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicLinkComponent from '@/components/BasicLinkComponent.vue'

export default defineComponent({
  name: 'ProgrammingTricksView',
  components: {
    BasicLinkComponent
  }
})
</script>

<style scoped>
.content {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  max-width: var(--content-max-width);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content-panel {
  padding: 15px;
  border-radius: 5px;
  box-shadow: var(--default-box-shadow);
}

a:hover {
  text-decoration: underline;
}
</style>
