<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});

// Slider: si el proyecto tiene varias capturas, cambian solas cada 4 s
const images = props.project.images ?? [];
const current = ref(0);
let timer = null;

function next() {
  current.value = (current.value + 1) % images.length;
}

function start() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (images.length > 1 && !reduceMotion && !timer) {
    timer = setInterval(next, 4000);
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

onMounted(start);
onBeforeUnmount(stop);
</script>

<template>
  <article
    class="card"
    :class="{ 'card--compact': compact, 'card--wip': project.wip }"
  >
    <div
      v-if="!compact"
      class="card-image"
      @mouseenter="stop"
      @mouseleave="start"
    >
      <template v-if="images.length">
        <img
          v-for="(src, i) in images"
          :key="src"
          :src="src"
          :alt="`Captura ${i + 1} de ${project.title}`"
          :class="{ active: i === current }"
          :loading="i === 0 ? 'eager' : 'lazy'"
        />
        <div v-if="images.length > 1" class="dots">
          <button
            v-for="(src, i) in images"
            :key="src"
            :class="{ active: i === current }"
            :aria-label="`Ver captura ${i + 1}`"
            @click="current = i"
          ></button>
        </div>
      </template>
      <template v-else>{{ project.title }}</template>
    </div>
    <div class="card-body">
      <p class="card-label">{{ project.label }}</p>
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-text">{{ project.description }}</p>
      <p v-if="project.role" class="card-text">
        <strong>Mi papel:</strong> {{ project.role }}
      </p>
      <ul v-if="project.tech.length" class="card-tech">
        <li v-for="tech in project.tech" :key="tech" class="chip">
          {{ tech }}
        </li>
      </ul>
      <a
        :href="project.url ?? project.repo"
        class="card-link"
        target="_blank"
        rel="noopener"
      >
        {{ project.linkText ?? "Ver código en GitHub →" }}
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
  color: var(--color-primary);
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 800;
  overflow: hidden;
  position: relative;
}

/* Todas las capturas apiladas; solo la activa es visible */
.card-image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.card-image img.active {
  opacity: 1;
}

.dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(30, 20, 45, 0.55);
}

.dots button {
  width: 8px;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.dots button.active {
  background: var(--color-lavender);
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

.card--compact {
  flex: 1 1 300px;
  border-radius: 20px;
}

.card--compact .card-body {
  padding: 28px;
  gap: 10px;
}

.card--compact .card-label {
  font-size: 13px;
}

.card--compact .card-title {
  font-size: 24px;
}

.card--compact .card-text {
  font-size: 16px;
}

.card--wip {
  border: 2px dashed var(--color-lavender);
}
</style>
