<script setup>
defineProps({
  size: { type: Number, default: 120 },
  petal: { type: String, default: "#F4B6D2" },
  center: { type: String, default: "#8E6CC4" },
});
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 120 120" aria-hidden="true">
    <g :fill="petal">
      <circle cx="60" cy="32" r="22" />
      <circle cx="88" cy="54" r="22" />
      <circle cx="77" cy="88" r="22" />
      <circle cx="43" cy="88" r="22" />
      <circle cx="32" cy="54" r="22" />
    </g>
    <circle cx="60" cy="62" r="14" :fill="center" />
  </svg>
</template>
