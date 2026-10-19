<script setup>
const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/valeria-zavaleta-vasquez",
  },
  { label: "GitHub", href: "https://github.com/valeriazv99" },
];
</script>

<template>
  <section id="contacto" class="contact">
    <p class="section-kicker">04 · contacto</p>
    <h2 class="section-title contact-title">¿Hablamos?</h2>
    <p class="contact-intro">
      Si buscas a alguien con ganas de aprender y crecer en tu equipo,
      escríbeme.
    </p>

    <a href="mailto:valeriazv99@gmail.com" class="btn btn-primary"
      >valeriazv99@gmail.com</a
    >

    <ul class="contact-links">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" target="_blank" rel="noopener">{{ link.label }}</a>
      </li>
      <li>
        <a href="/cv.pdf" download>Descargar CV (PDF)</a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.contact {
  max-width: 1120px;
  margin: 0 auto;
  padding: 112px 24px;
  text-align: center;
}

.contact-title {
  font-size: clamp(40px, 6vw, 56px);
}

.contact-intro {
  max-width: 520px;
  margin: 0 auto 36px;
  font-size: 19px;
  color: var(--color-text);
}

.contact-links {
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 32px;
}

.contact-links a {
  display: inline-block;
  padding: 10px 0;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.contact-links a:hover {
  color: var(--color-primary-dark);
}
</style>
