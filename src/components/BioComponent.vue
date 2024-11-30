<!-- BioComponent.vue -->

<template>
  <h1>About</h1>
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
          in the boundary between hardware and software to create custom platforms.
        </p>
        <p>
          I have a background in linux and specifically building linux for embedded systems. I enjoy
          the challenge of connecting software with hardware and designing systems for custom
          purposes.
        </p>
        <p>
          On the other side of the spectrum, I enjoy web development. I have been using Javascript
          for many years and more recently began using frameworks, specifically Vue.js. This site
          was built with
          <a href="https://vuejs.org/">Vue.js</a> so go check it out! Beyond the front-end, I enjoy
          server configuration and database management. I recently implemented WebSockets on an
          embedded system that doubled as a lightweight web server. I also implement a scheduling
          management program for school districts. To learn more about that, visit our
          <a href="https://feljon.org/">website</a>.
        </p>
        <p>
          Right now I am serving as a year-long volunteer with for
          <a href="https://mds.org/">Mennonite Disaster Service</a>
        </p>
      </div>

      <div :class="{ detail: true, selected: currentDetail === 1 }">
        <p>
          When I'm not working on personal projects, I love getting outside. Rock climbing is my
          favorite outdoor activity, but I also enjoy hiking and backpacking. I live in Princeton,
          NJ with my wife Katie. Since getting married in 2022 we have taken turns finishing up
          school. Now we are looking for our next adventure!
        </p>
      </div>
      <div :class="{ detail: true, selected: currentDetail === 2 }">
        <p>
          During my time in college, I took a lot of interesting classes! Here are some of the
          highlights:
        </p>
        <ul>
          <li>
            Introduction to Compilers (ECE 46800) -- Implemented a compiler for micro C using Java
          </li>
          <li>
            Cybersecurity (ECE 40400) -- Fundamentals of encryption algorithms and practicals of
            security
          </li>
          <li>
            Introduction to AI (ECE 47300) -- Introduction to architecting nerual networks and the
            math behind AI
          </li>
          <li>Real Analysis (MA 34100) -- Analysis of the real numbers (up to calculus)</li>
          <li>
            Applied Algorithms (ECE 59500) -- Survey of various algorithms and their applications
          </li>
        </ul>
      </div>
      <div :class="{ detail: true, selected: currentDetail === 3 }">
        <p>
          If you share a passion for technology or the outdoors, I'd love to connect. Feel free to
          <a href="/contact">reach out!</a> Let's talk coding or climbing or anything in between!
        </p>
        <p>
          Since graduating from college I have found the value of relationships only continues to
          grow. Feel free to connect and see what comes of it!
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SummaryLinkComponent from '@/components/SummaryLinkComponent.vue'

export default defineComponent({
  data() {
    return {
      name: 'Jonathon Shirk Snyder',
      currentDetail: 0,
      headingNames: ['Education and Experience', 'Beyond Computers', 'Coursework', "Let's Connect"]
    }
  },
  methods: {
    showDetail(index: Number) {}
  },

  components: {
    SummaryLinkComponent
  }
})
</script>

<style scoped>
h2 {
  padding-left: var(--default-padding);
  padding-right: var(--default-padding);
}

section {
  display: flex;
  flex-direction: row;
  width: var(--content-max-width);
  justify-content: space-evenly;
  align-items: start;
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
  color: transparent;
  p,
  li,
  a {
    max-width: 95%;
    color: transparent;
  }
}

.container:hover {
  background-color: var(--default-panel-background);
  cursor: pointer;
  h2 {
    color: var(--accent-color-3);
  }
}
.selected {
  max-width: var(--content-max-width);
  background-color: var(--default-panel-background);
  h2 {
    height: min-content;
    color: var(--accent-color-3);
  }
  p,
  li {
    color: var(--accent-color-2);
  }
  a {
    color: var(--accent-color-3);
  }
}
</style>
