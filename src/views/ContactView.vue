<!-- ContactInfo.vue -->

<template>
  <div class="content">
    <div class="contact-info">
      <div class="profile-image">
        <img src="@/assets/fiery_earth.jpg" alt="Profile Image" />
      </div>
      <div class="info">
        <div class="info-item">
          <strong>Name: </strong>
          <span>{{ name }}</span>
        </div>
        <div class="info-item">
          <strong>Email: </strong>
          <a :href="'mailto:' + email">{{ email }}</a>
        </div>
        <div class="info-item">
          <strong>LinkedIn: </strong>
          <a :href="linkedIn" target="_blank" rel="noopener noreferrer">{{ linkedinUsername }}</a>
        </div>
        <div class="info-item">
          <strong>GitHub: </strong>
          <a :href="github" target="_blank" rel="noopener noreferrer">{{ githubUsername }}</a>
        </div>
        <div class="info-item">
          <strong>Website: </strong>
          <a :href="website" target="_blank" rel="noopener noreferrer">{{ websiteText }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactView',
  data() {
    return {
      name: 'Jonathon Shirk Snyder',
      email: 'j.snyder98774@gmail.com',
      linkedinUsername: 'js-snyder',
      githubUsername: '98774 (yes, just the number...)',
      linkedIn: 'https://www.linkedin.com/in/js-snyder/',
      github: 'https://github.com/98774',
      profilePicture: '@/assets/fiery_earth.jpg',
      website: 'https://98774.github.io',
      websiteText: '98774.github.io'
    }
  }
})
</script>

<style scoped>
span {
  color: var(--accent-color-2);
}
.contact-info {
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  background-color: var(--default-panel-background);
  border-radius: var(--default-border-radius);
  padding: calc(2 * var(--default-padding));
  line-height: 1.6;
  opacity: 1;
}
.content {
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-grey);
  text-align: center;
  padding: var(--default-padding);
}
.profile-image img {
  width: 180px; /* Set the desired width for the profile image */
  height: 180px; /* Set the desired height for the profile image */
  border-radius: 50%; /* Make it a circle */
  margin-right: 20px;
}

.info-item {
  margin: calc(2 * var(--default-margin));
  font-size: var(--content-font-size);
}
</style>
