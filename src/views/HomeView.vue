<!-- Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <div class="panel">
      <router-link to="/projects" class="project-link">Project 1</router-link>
      <router-link to="/project2" class="project-link">Project 2</router-link>
      <router-link to="/project3" class="project-link">Project 3</router-link>
    </div>
  </div>
</template>

<style>
.panel {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.project-link {
  padding: 10px;
  background-color: var(--tertiary-color);
  color: var(--secondary-color);
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
}

.project-link:hover {
  background-color: var(--dark-grey);
}
</style>
