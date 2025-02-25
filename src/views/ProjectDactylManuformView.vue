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
          updates. The firmware is powered by <a href="https://qmk.fm" target="_blank">QMK</a>, for
          customized keymaps, layers, and lighting effects.
        </p>
        <img
          class="project-image"
          src="@/assets/project/dactyl-manuform/13_full-lightup-complete.jpg"
          alt="Fully lit keyboard with all features enabled"
        />
      </template>

      <template v-slot:detailed-description>
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
            decision. It took me around 40 hours of work total for assembly from parts to
            functioning keyboard. Of course, there was a lot of troubleshooting a long the way.
          </p>
        </section>

        <section>
          <h2>Build Process</h2>
          <h3>0. What am I doing?</h3>
          <p>
            Having never built a keyboard before and only recently entering the custom keyboard
            space at all, I had no idea what I was doing. But Google is your friend :) and after a
            few hours of research I had a good idea of what I needed to do. Here is a (very) brief
            overview of how keyboards work. Each key is connected to a microcontroller through a
            matrix of wires. When a key is pressed, the microcontroller detects the change in the
            matrix and sends a signal to the computer. The computer then knows which key was pressed
            and can act accordingly. The microcontroller also controls the RGB lighting and any
            other features of the keyboard. If that sounds interesting, I go into more detail at the
            end of the page so feel free to read more there.
          </p>
          <p>
            After understanding the basics of how a keyboard works, I needed to decide on a layout.
            Eventually I decied the 4x5 layout would be a nice size. It would provide ample keys for
            each finger but would force me to use layering constantly to work effectively. My
            ultimate goal was to effectively use layers for my day-to-day navigation and computer
            needs. I also wanted to have a few keys for macros and other shortcuts.
          </p>
          <h3>1. Wiring the PCB</h3>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/00_pcb-base.jpg"
            alt="PCB base for the Dactyl Manuform keyboard"
          />

          <p>
            It's very possible to build a keyboard with just wires and diodes. But, I wanted RGB
            lighting and that adds an additional 3 wires to each key so in total I needed 5 wires
            per key. Managing that without a PCB would have been EXTREMELY tedious and probably
            wouldn't have worked as well. So, I researched and found a cheap PCB online. This proved
            the easy part. I found a version I liked called the Universal Toe Bean (I don't know
            either). The source for that is
            <a href="https://github.com/WainingForests/Universal-Toe-Beans.git" target="_blank"
              >here.
            </a>
          </p>
          <img
            class="project-image"
            src="@/assets/project/dactyl-manuform/choc_v1.png"
            alt="The PCB I used: Universal Toe Beans PCB"
          />
          <p>
            I won't go into the PCB wiring in detail, but basically we need the R and C nodes for
            the rows and columns on the keys, and we need the DIN, VCC, and GND nodes for the RGB
            lighting. I'll explain these a bit as we go along.
          </p>
          <p>
            At it's core, we need to solder rows and columns to the microcontroller that we will use
            to run the whole PCB. Pretend our keyboard is a 3x3 grid. There are a couple of ways we
            could detect presses on a microcontroller. One solution is to connect every key to a pin
            on the microcontroller. This would work for our mini keyboard. We have 9 keys and we
            could use 9 pins. However, what would we do if we need 100+ keys? Our current
            microcontroller only has a dozen or so pins available. This is where the idea of
            scanning comes in.
          </p>
          <p>
            Computers are very fast<sup>[citation needed]</sup>. When a person pushes a button, they
            will hold it down for tens to hundreds of milliseconds. We don't need to detect the key
            press for that entire time. Instead we can scan all the keys every so often and see if
            any are pressed. So how does that help with pins? Imagine our 3x3 keyboard again. What
            if we used a wire for every row and a wire for every column. Now our keyboard only needs
            6 wires instead of 9. We can check each wire
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
          <p></p>
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
