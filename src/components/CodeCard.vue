<script setup>
const stack = ["Vue", "Node", "Laravel"];
</script>

<template>
  <div class="code-card">
    <div class="dots" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
    <pre class="code"><code><span class="kw">const</span> valeria = {
  rol: <span class="str">'Desarrolladora web junior'</span>,
  stack: [<template v-for="(tech, i) in stack" :key="tech"><span class="str">'{{ tech }}'</span><template v-if="i < stack.length - 1">, </template></template>],
  ubicacion: <span class="str">'Barcelona'</span>,
  buscando: <span class="str">'mi primera oportunidad'</span>
};</code></pre>
  </div>
</template>

<style scoped>
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
  font-size: 15px;
  line-height: 1.8;
  white-space: pre-wrap;
}

.kw {
  color: var(--color-pink);
}
.str {
  color: var(--color-lavender);
}
</style>
