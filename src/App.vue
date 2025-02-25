<template>
  <div id="app">
    <header>
      <div class="links">
        <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }"
          >Home</router-link
        >
        <router-link
          to="/projects"
          class="nav-link"
          :class="{ active: $route.path === '/projects' }"
          >Projects</router-link
        >
        <router-link to="/about" class="nav-link" :class="{ active: $route.path === '/about' }"
          >About</router-link
        >
        <router-link to="/contact" class="nav-link" :class="{ active: $route.path === '/contact' }"
          >Contact</router-link
        >
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025 Jonathon Shirk Snyder</p>
    </footer>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
html, body {
  height: 100%;
  margin: 0;
  overflow: hidden; /* Prevents scrolling */
}

#app {
  position: relative;
  width: 100vw;
  height: 100vh; /* Forces it to fill the screen */
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url('./src/assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center; /* Ensures cropping from the top */
}

main {
  height: 100%;
}

header {
  background: linear-gradient(to bottom, var(--nav-background-light), var(--nav-background-dark));
  padding: 10px 0;
}

.links {
  text-align: center;
  display: flex;
  justify-content: center;
}

.nav-link {
  padding: 10px 15px;
  color: var(--accent-color-1);
  text-decoration: none;
  border-radius: var(--default-border-radius);
  transition:
    transform 0.2s,
    background-color 0.3s,
    color 0.3s;
  font-size: var(--header-font-size);
  margin: 0 10px;
  opacity: var(--default-opacity);
}

.nav-link:hover,
.nav-link.active {
  background-color: var(--highlight-background);
  color: var(--highlight-color);
  transform: scale(1.1);
}

/* Footer styles */
footer {
  background-color: var(--nav-background-dark);
  color: var(--footer-text-color);
  text-align: center;
  padding: 10px;
  width: 100%;
}
</style>
