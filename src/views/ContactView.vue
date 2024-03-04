<!-- ContactInfo.vue -->

<template>
  <div>
    <h1>Contact Information</h1>
    <div class="contact-info">
      <div class="profile-image">
        <img src="@/assets/fiery_earth.jpg" alt="Profile Image" />
      </div>
      <div class="info">
        <div class="info-item">
          <strong>Email:  </strong>
          <a :href="'mailto:' + email">{{ email }}</a>
        </div>
        <div class="info-item">
          <strong>LinkedIn:  </strong>
          <a :href="linkedIn" target="_blank" rel="noopener noreferrer">{{ linkedinUsername }}</a>
        </div>
        <div class="info-item">
          <strong>GitHub:  </strong>
          <a :href="github" target="_blank" rel="noopener noreferrer">{{ githubUsername }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactView',
  data() {
    return {
      email: 'j.snyder98774@gmail.com',
      linkedinUsername: 'js-snyder',
      githubUsername: '98774 (yes, just the number...)' ,
      linkedIn: 'https://www.linkedin.com/in/js-snyder/',
      github: 'https://github.com/98774',
      profilePicture: '@/assets/fiery_earth.jpg' //Not used right now
    };
  },
});
</script>

<style scoped>
.contact-info {
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
}

.profile-image img {
  width: 100px; /* Set the desired width for the profile image */
  height: 100px; /* Set the desired height for the profile image */
  border-radius: 50%; /* Make it a circle */
  margin-right: 20px;
}
  
.info-item {
  margin: calc(3 * var(--default-margin));
  font-size: var(--content-font-size);
}

a {
  color: var(--main-color);
  text-decoration: none;
}

a:hover {
  color: var(--highlight-color);
}

</style>  