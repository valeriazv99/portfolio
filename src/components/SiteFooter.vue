<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <span>© {{ year }} Valeria Zavaleta</span>
      <span class="footer-tech">Hecha con Vue 3 + Vite</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
}

.footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 28px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  font-size: 15px;
  color: var(--color-muted);
}

.footer-tech {
  font-family: var(--font-code);
}
</style>
