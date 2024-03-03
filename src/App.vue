<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/projects" class="nav-link">Projects</router-link>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2024 Jonathon Shirk Snyder</p>
    </footer>
  </div>
</template>

<style>

header {
  background-color: var(--tertiary-color);
  padding: 5px;
  text-align: center;
  display: flex;
  margin: var(--default-margin);
}

.nav-link {
  padding: 15px;
  background-color: var(--tertiary-color);
  color: var(--secondary-color);
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: var(--header-font-size);
  margin: var(--default-margin);
  font-weight: bold;
}

.nav-link:hover {
  background-color: var(--dark-grey);
  font-weight: 999;
  color: var(--light-grey);
}

footer {
  background-color: var(--tertiary-color);
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
