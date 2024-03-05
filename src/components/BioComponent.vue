<!-- BioComponent.vue -->

<template>
  <div class="content">
    <section>
      <h1>Jonathon Shirk Snyder</h1>
      <p>Passionate about web development, software, and embedded programming</p>
    </section>

    <section>
      <h2>About Me:</h2>
      <p>
        Greetings! I'm {{ name }}, a passionate individual with a multifaceted interest in the
        realms of web development, software, and embedded programming. I find joy in creating
        solutions that bridge the gap between the physical and the digital.
      </p>

      <h2>Professional Pursuits:</h2>
      <p>
        My professional journey has been centered around the dynamic world of web development. I
        thrive on staying at the forefront of technological advancements, exploring innovative
        solutions, and transforming ideas into seamless digital experiences. In addition to my
        digital endeavors, I have a keen interest in embedded programming, delving into the
        intricacies of connecting software with hardware, creating efficient and effective systems.
      </p>

      <h2>Beyond the Digital Realm:</h2>
      <p>
        When I'm not immersed in lines of code, you'll often find me seeking adventure in the great
        outdoors. Rock climbing, backpacking, and hiking are not just hobbies for me—they're a way
        of life. The rugged beauty of nature provides the perfect counterbalance to the precision of
        programming.
      </p>

      <h2>Let's Connect:</h2>
      <p>
        If you share a passion for technology, the outdoors, or both, I'd love to connect. Feel free
        to <router-link to="/contact">reach out</router-link> and let's embark on a conversation
        about coding, climbing, or anything in between.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'Jonathon Shirk Snyder'
    }
  }
})
</script>

<style scoped>
/* Add your component-specific styles here */

.content {
  text-align: center;
  margin-bottom: 50px;
}

section {
  max-width: var(--content-max-width);
  margin: 0 auto;
}
</style>
