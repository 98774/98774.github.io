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
  padding: 15px;
  background-color: var(--tertiary-color);
  color: var(--main-color);
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: var(--header-font-size);
  margin: var(--default-margin);
  font-weight: bold;
}

.project-link:hover {
  background-color: var(--highlight-background);
  font-weight: 999;
  color: var(--highlight-color);
}
</style>
