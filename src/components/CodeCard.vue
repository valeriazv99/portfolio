<script setup>
import RoundFlower from "./RoundFlower.vue";

const stack = ["JavaScript", "Vue", "Node", "Laravel"];
</script>

<template>
  <div class="code-wrap">
    <div class="code-card">
      <div class="dots" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <pre class="code"><code><span class="kw">const</span> valeria = {
  rol: <span class="str">'Desarrolladora web junior'</span>,
  stack: [<template v-for="tech in stack" :key="tech">{{ "\n    " }}<span class="str">'{{ tech }}'</span>,</template>{{ "\n  " }}],
  ubicacion: <span class="str">'Barcelona'</span>,
  buscando: <span class="str">'mi primera oportunidad'</span>
};</code></pre>
    </div>
    <RoundFlower class="flower flower-big" :size="120" />
    <RoundFlower
      class="flower flower-small"
      :size="64"
      petal="#CDB8EE"
      center="#F4B6D2"
    />
  </div>
</template>

<style scoped>
.code-wrap {
  position: relative;
}

.flower {
  position: absolute;
  pointer-events: none;
}

.flower-big {
  right: -28px;
  bottom: -44px;
}

.flower-small {
  left: -24px;
  top: -28px;
  transform: rotate(-15deg);
}

.code-card {
  background: var(--color-ink);
  color: #ede3fa;
  border-radius: 20px;
  padding: 28px 28px 32px;
  box-shadow: 0 24px 48px rgba(74, 39, 117, 0.18);
}

.dots {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dots span:nth-child(1) {
  background: var(--color-pink);
}
.dots span:nth-child(2) {
  background: var(--color-lavender);
}
.dots span:nth-child(3) {
  background: #8e6cc4;
}

.code {
  margin: 0;
  font-family: var(--font-code);
  font-size: clamp(12px, 3.3vw, 15px);
  line-height: 1.8;
  white-space: pre-wrap;
}

.kw {
  color: var(--color-pink);
}
.str {
  color: var(--color-lavender);
}

@media (max-width: 600px) {
  .flower-big {
    right: -12px;
  }

  .flower-small {
    left: -12px;
  }
}
</style>
