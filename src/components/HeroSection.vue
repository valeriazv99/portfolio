<script setup>
import CodeCard from "./CodeCard.vue";
</script>

<template>
  <section id="inicio" class="hero">
    <div class="hero-text">
      <p class="hero-kicker">// hola, soy</p>
      <h1 class="hero-title">Valeria Zavaleta</h1>
      <p class="hero-role">Desarrolladora web junior</p>
      <p class="hero-intro">
        Estoy terminando el CFGS de Desarrollo de Aplicaciones Web y busco mi
        primera oportunidad en el sector, en empleo o prácticas.
      </p>
      <div class="hero-actions">
        <a href="#proyectos" class="btn btn-primary">Ver proyectos</a>
        <a href="/cv.pdf" class="btn btn-secondary" download>Descargar CV</a>
      </div>
    </div>
    <div class="hero-visual">
      <CodeCard />
    </div>
  </section>
</template>

<style scoped>
.hero {
  max-width: 1120px;
  margin: 0 auto;
  padding: 96px 24px 112px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 56px;
}

.hero-text {
  flex: 1 1 480px;
  min-width: 0;
}

.hero-kicker {
  margin: 0 0 16px;
  font-family: var(--font-code);
  font-size: 15px;
  color: var(--color-accent);
}

.hero-title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(44px, 8vw, 76px);
  line-height: 1.02;
  letter-spacing: -0.02em;
}

.hero-role {
  margin: 20px 0 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 28px;
  line-height: 1.3;
  color: var(--color-primary);
}

.hero-intro {
  margin: 20px 0 0;
  max-width: 520px;
  font-size: 19px;
  color: var(--color-text);
}

.hero-actions {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-visual {
  flex: 1 1 380px;
  min-width: 0;
}
</style>
