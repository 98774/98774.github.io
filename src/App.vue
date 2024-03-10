<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/projects" class="nav-link">Projects</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
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
main {
  /* prevent behind footer */
  margin-bottom: 55px;
}
header {
  background-color: var(--nav-background-color);
  padding: 5px;
  text-align: center;
  display: flex;
  margin: var(--default-margin);
}

.nav-link {
  padding: 15px;
  color: var(--accent-color-1);
  text-decoration: none;

  border-radius: var(--default-border-radius);
  transition: background-color 0.3s;
  font-size: var(--header-font-size);
  margin: var(--default-margin);
}

.nav-link:hover {
  background-color: var(--highlight-background);
  color: var(--highlight-color);
}

footer {
  background-color: var(--nav-background-color);
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 6%;
}
</style>
