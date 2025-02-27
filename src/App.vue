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
      <!--<p>&copy; 2025 Jonathon Shirk Snyder</p> -->
    </footer>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  overflow: auto;
}

h1,
p,
h2 {
  opacity: 1;
  color: var(--white);
}
li {
  list-style-type: none;
}

a {
  opacity: 1;
  color: var(--light-green);
}

#app {
  position: relative;
  width: 100vw;
  height: 100vh; /* Forces it to fill the screen */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  background-image: url('@/assets/background.jpg');
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
  color: var(--dark-grey);
  text-decoration: none;
  padding: 10px;
  padding-top: 5px;
  border-radius: var(--default-border-radius);
  transition:
    transform 0.2s,
    background-color 0.3s,
    color 0.3s;
  font-size: var(--header-font-size);
  margin: 10px 10px;
  opacity: var(--default-opacity);
}

.nav-link:hover {
  color: var(--grey);
  transform: scale(1.1);
}
.nav-link.active {
  background-color: var(--default-panel-background);
  color: var(--highlight-color);
  transform: scale(1.1);
}

/* Footer styles */
footer {
  text-align: center;
  padding: 10px;
  p {
    color: var(--dark-grey);
  }
}
</style>
