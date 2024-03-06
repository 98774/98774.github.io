<!-- BioComponent.vue -->

<template>
  <h1>About Me:</h1>
  <strong><p>Web Development && Embedded (Software || Linux)</p></strong>
  <p>Hi, I'm Jonathon Shirk Snyder</p>
  <div class="content">
    <section class="headings">
      <div
        v-for="(name, index) in headingNames"
        :class="{ container: true, selected: currentDetail === index }"
        @click="currentDetail = index"
      >
        <h2>{{ name }}</h2>
      </div>
    </section>
    <section>
      <div :class="{ detail: true, selected: currentDetail === 0 }">
        <p>
          In May 2023, I graduated with a Bachelor's degree in Computer Engineering from Purdue
          University. Much of my time at Purdue focused on embedded software. I really enjoy working
          in the boundary between hardware and software that allows custom built devices to run
          optimally.
        </p>
        <p>
          In the realm of embedded systems, I have a strong background in working with Embedded
          Linux and OpenWRT. I enjoy the challenges of connecting software with hardware, to design
          custom systems that are very efficient.
        </p>
        <p>
          On the other side of the spectrum, I have used Javascript for many years and more recently
          delved into using WebSockets. On the front-end, I've utilized JavaScript-based WebSockets
          in combination with Vue.js to create responsive interfaces and real-time updates.
        </p>
      </div>

      <div :class="{ detail: true, selected: currentDetail === 1 }">
        <p>
          When I'm not working on personal projects, I love getting outside. Rock climbing is my
          favorite outdoor activity, but I also enjoy hiking and backpacking. I haven't always been
          a "people person", but since graduating from college I have found the value of
          relationships only continues to grow.
        </p>
      </div>
      <div :class="{ detail: true, selected: currentDetail === 2 }">
        <p>
          If you share a passion for technology or the outdoors, I'd love to connect. Feel free to
          <a href="/contact">reach out</a>, and let's embark on a conversation about coding,
          climbing, or anything in between.
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectLinkComponent from '@/components/ProjectLinkComponent.vue'

export default defineComponent({
  data() {
    return {
      name: 'Jonathon Shirk Snyder',
      currentDetail: 0,
      headingNames: ['Education and Experience', 'Beyond Computers', "Let's Connect"]
    }
  },
  methods: {
    showDetail(index: Number) {}
  },

  components: {
    ProjectLinkComponent
  }
})
</script>

<style scoped>
h2 {
  width: 300px;
}

section {
  display: flex;
  flex-direction: row;
  width: var(--content-max-width);
  justify-content: space-between;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: var(--default-padding);
  width: var(--content-max-width);
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: var(--default-border-radius);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.detail {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
  overflow: hidden;
  max-width: 0;
  transition: all 0.3s;
  align-items: center;
  border-radius: var(--default-border-radius);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  height: 100px;
  p {
    max-width: 95%;
  }
}

.container:hover {
  background-color: var(--highlight-background);
  cursor: pointer;
  h2 {
    color: var(--accent-color-3);
  }
}
.selected {
  max-width: var(--content-max-width);
  height: min-content;
  max-height: 500px;
  background-color: var(--default-panel-background);
  h2 {
    color: var(--accent-color-3);
  }
}
</style>
