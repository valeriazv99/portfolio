<script setup>
import ProjectCard from "./ProjectCard.vue";
import { projects } from "../data/projects.js";

const featured = projects.filter((project) => project.featured);
</script>

<template>
  <section id="proyectos" class="projects">
    <div class="container">
      <p class="section-kicker">01 · proyectos</p>
      <h2 class="section-title">Lo que he construido</h2>
      <p class="intro">
        Proyectos del ciclo DAW. El código de todos está en mi GitHub.
      </p>

      <div class="featured">
        <ProjectCard
          v-for="project in featured"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--color-bg-alt);
  padding: 96px 0;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.intro {
  margin: 0 0 48px;
  max-width: 600px;
  color: var(--color-text);
}

.featured {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
