<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="card">
    <div class="card-image">[Captura de {{ project.title }}]</div>
    <div class="card-body">
      <p class="card-label">{{ project.label }}</p>
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-text">{{ project.description }}</p>
      <p v-if="project.role" class="card-text">
        <strong>Mi papel:</strong> {{ project.role }}
      </p>
      <ul class="card-tech">
        <li v-for="tech in project.tech" :key="tech" class="chip">
          {{ tech }}
        </li>
      </ul>
      <a :href="project.repo" class="card-link" target="_blank" rel="noopener">
        Ver código en GitHub →
      </a>
    </div>
  </article>
</template>

<style scoped>
.card {
  flex: 1 1 440px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 24px;
  overflow: hidden;
}

.card-image {
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9ddfb;
  color: var(--color-muted);
  font-family: var(--font-code);
  font-size: 15px;
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 32px;
}

.card-label {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.card-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 32px;
  line-height: 1.15;
}

.card-text {
  margin: 0;
  color: var(--color-text);
}

.card-text strong {
  color: var(--color-ink);
}

.card-tech {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card-link {
  margin-top: auto;
  padding: 10px 0;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.card-link:hover {
  color: var(--color-primary-dark);
}
</style>
