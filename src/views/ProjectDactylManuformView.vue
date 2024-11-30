<template>
  <div>
    <ProjectInfo
      projectTitle="Dactyl Manuform Build"
      githubLink="https://github.com/98774/qmk_firmware.git"
    >
      <template v-slot:summary>
        <p>
          This project details the construction of a handwired Dactyl Manuform keyboard. The build
          features RGB lighting, a 3D-printed case, and a small LED display for real-time status
          updates. The firmware is powered by <a href="https://qmk.fm" target="_blank">QMK</a>,
          enabling customization of keymaps, layers, and lighting effects.
        </p>
      </template>

      <template v-slot:detailed-description>
        <img
          class="project-image"
          src="@/assets/project/dactyl-manuform/13_full-lightup-complete.jpg"
          alt="Fully lit keyboard with all features enabled"
        />
        <section>
          <h2>Materials Used</h2>
          <ul>
            <li>3D-printed Dactyl Manuform case (STL files available online)</li>
            <li>Mechanical key switches (e.g., Gateron, Cherry MX)</li>
            <li>Keycaps</li>
            <li>Microcontroller (Pro Micro or Elite-C)</li>
            <li>WS2812 RGB LED strips</li>
            <li>1N4148 diodes (one per switch)</li>
            <li>Solid core wires</li>
            <li>Soldering iron and solder</li>
            <li>Multimeter</li>
            <li>LED display</li>
          </ul>
        </section>

        <section>
          <h2>Overview</h2>
          <p>
            After browsing online for a cheap split keyboard, I got fed up with the lack of low cost
            options. Eventually I decided to build my own. This project is the result of that
            decision. It took me around 40 hours of work total from parts to functioning keyboard.
            There were a number of challenges I ran into with this project.
          </p>
        </section>

        <section>
          <h2>Build Process</h2>
          <h3>1. Wiring the PCB</h3>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/00_pcb-base.jpg"
            alt="PCB base for the Dactyl Manuform keyboard"
          />

          <p>
            The first step was preparing the PCB and connecting the necessary data lines. Keeping
            the wiring clean was essential for debugging and assembly.
          </p>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/01_base-pcb-in-case.jpg"
            alt="PCB placed inside the keyboard case"
          />

          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/02_data-wire-complete.jpg"
            alt="Data wire connections complete"
          />
          <h3>2. Completing All Wiring</h3>
          <p>
            After the data lines, all wiring was added to connect switches, LEDs, and the
            microcontroller. Soldering each connection carefully helped avoid shorts and ensured
            reliable performance.
          </p>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/03_all-wiring-complete.jpg"
            alt="All wiring complete for the keyboard"
          />

          <h3>3. Microcontroller Installation</h3>
          <p>
            The microcontroller was added and connected to the wiring. Verifying connections with a
            multimeter ensured there were no errors.
          </p>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/04_microcontroller-added.jpg"
            alt="Microcontroller added to the setup"
          />
          <h3>4. RGB Lighting Setup</h3>
          <p>
            RGB LED strips were installed on both sides of the keyboard. Testing the wiring at this
            stage prevented any lighting inconsistencies.
          </p>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/06_rgb-ligth-back.jpg"
            alt="Back view of RGB lighting installation"
          />
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/07_rgb-light-front.jpg"
            alt="Front view of RGB lighting installation"
          />

          <h3>5. Finishing Touches</h3>
          <p>
            After wiring the keyboard matrix and LED strips, the LED display was added to show
            real-time keyboard layers and modifiers. The final assembly included aligning all
            components and verifying functionality.
          </p>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/12_screen-added.jpg"
            alt="LED screen added to display keyboard status"
          />
        </section>

        <section>
          <h2>Challenges</h2>
          <h3>1. Wiring Complexity</h3>
          <p>
            Ensuring all wires were neatly routed and connected without overlapping or shorting was
            a challenge. Using solid core wires helped maintain order.
          </p>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/08_grey-wiring-complete.jpg"
            alt="Wiring completed, showing organized layout"
          />

          <h3>2. RGB Data Chain Mapping</h3>
          <p>
            Wiring the RGB LED data chain required precise planning. Misconnections resulted in
            incomplete lighting or flickering effects.
          </p>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/09_both-sides-rgb.jpg"
            alt="RGB setup on both sides of the keyboard"
          />

          <h3>3. Software Configuration</h3>
          <p>
            Mapping the keyboard layout and LED effects in QMK firmware took some time. Reading
            through the documentation and testing configurations resolved issues.
          </p>
        </section>

        <section>
          <h2>Final Build</h2>
          <p>
            The completed Dactyl Manuform keyboard features an ergonomic layout, customizable RGB
            lighting, and a functional LED display. This project demonstrates how hardware
            customization can enhance user experience.
          </p>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/14_back-view-grey.jpg"
            alt="Back view of the completed keyboard"
          />
        </section>
        <section>
          <h2>Challenges Faced (and Conquered!)</h2>
          <h3>1. RGB Data Chain Mapping</h3>
          <p>
            Mapping out the RGB data chain felt like planning a heist. Every LED had to connect in
            the right order, or the lighting would glitch. A detailed diagram saved me from LED
            chaos.
          </p>

          <h3>2. Defining the LED Matrix</h3>
          <p>
            Translating physical key positions to software? Easier said than done. Defining the LED
            matrix in QMK meant aligning the virtual map with the real world—precision was key.
          </p>

          <h3>3. Tracking Down Shorts</h3>
          <p>
            Tiny wires, tiny solder points, big headaches. I ran into shorts more times than I’d
            like to admit. Testing each key with a multimeter became a ritual, but it paid off.
          </p>

          <h3>4. QMK Configuration Madness</h3>
          <p>
            Configuring QMK for RGB and power settings felt like learning a new language. There’s no
            shortcut—reading the docs and trial-and-error got me there. Worth it.
          </p>

          <h3>5. Microcontroller Wire Chaos</h3>
          <p>
            So. Many. Wires. Getting everything soldered to the microcontroller without turning it
            into spaghetti required patience and a good labeling system.
          </p>

          <h3>6. Mastering the LED Display</h3>
          <p>
            Getting the LED display to show layers and modifiers was a puzzle. But after diving deep
            into the docs, it’s like having a live status monitor. No more guessing which layer I'm
            on!
          </p>
        </section>
      </template>
    </ProjectInfo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectInfo from '@/components/ProjectInfoComponent.vue'

export default defineComponent({
  name: 'DactylManuformProject',
  components: {
    ProjectInfo
  }
})
</script>

<style scoped>
.project-image {
  display: block;
  max-width: 50%;
  height: auto;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}
h2 {
  font-weight: bold;
  margin-bottom: 10px;
}
p,
ul,
img {
  margin-bottom: 20px;
}
ul {
  list-style-type: disc;
  margin-left: 20px;
}
a {
  color: #3498db;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
