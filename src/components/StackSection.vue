<script setup>
import { stack } from "../data/stack.js";
</script>

<template>
  <section id="stack" class="stack">
    <div class="container">
      <p class="section-kicker">03 · stack</p>
      <h2 class="section-title">Con qué trabajo</h2>

      <div class="groups">
        <div v-for="group in stack" :key="group.category" class="group">
          <h3 class="group-title">{{ group.category }}</h3>
          <ul class="group-items">
            <li v-for="item in group.items" :key="item" class="chip">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  background: var(--color-bg-alt);
  padding: 96px 0;
}

.groups {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.group {
  flex: 1 1 300px;
  min-width: 0;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 28px;
}

.group-title {
  margin: 0 0 16px;
  font-family: var(--font-display);
  font-size: 22px;
}

.group-items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
