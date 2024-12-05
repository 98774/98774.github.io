<template>
  <div id="app">
    <header>
      <div class="links">
        <!-- <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }"
          >Home</router-link
        > -->
        <router-link
          to="/"
          class="nav-link"
          :class="{ active: $route.path === '/projects' || $route.path === '/'  }"
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
      <p>&copy; 2024 Jonathon Shirk Snyder</p>
    </footer>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures full height */
  align-items: center;
}

main {
  flex: 1; /* Allows main content to grow and push the footer down */
  padding-bottom: 50px; /* Optional: prevents overlap with the footer */
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
