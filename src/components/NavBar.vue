<script setup>
const links = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];
</script>
<template>
  <header class="nav-header">
    <nav class="nav" aria-label="Principal">
      <a href="#inicio" class="logo">valeria<span>.dev</span></a>

      <ul class="nav-links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href">{{ link.label }}</a>
        </li>
        <li>
          <a href="/cv.pdf" class="btn-cv" download>Descargar CV</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.nav-header {
  border-bottom: 1px solid var(--color-border);
}

.nav {
  max-width: 1120px;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 22px;
  color: var(--color-ink);
  text-decoration: none;
}

.logo span {
  color: var(--color-primary);
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 24px;
}

.nav-links a {
  color: var(--color-ink);
  text-decoration: none;
  font-weight: 500;
  padding: 10px 0;
}

.nav-links a:hover {
  color: var(--color-primary);
}

.nav-links .btn-cv {
  background: var(--color-primary);
  color: #fff;
  padding: 10px 20px;
  border-radius: 999px;
  font-weight: 700;
}

.nav-links .btn-cv:hover {
  background: var(--color-primary-dark);
  color: #fff;
}
</style>
