<!-- Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <div class="panel">
      <p>

      Welcom to my site! Feel free to explore and reach out if you have any questions!
    </p>
      
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
