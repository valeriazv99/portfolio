<template>
  <section id="sobre-mi" class="about">
    <div class="about-heading">
      <p class="section-kicker">02 · sobre mí</p>
      <h2 class="section-title">Un camino poco típico</h2>
    </div>
    <div class="about-text">
      <p>
        Llevo más de siete años trabajando en hostelería, y de ahí me traigo el
        trabajo en equipo, mantener la calma bajo presión y entender lo que
        necesita la persona que tengo delante.
      </p>
      <p>
        Ahora lo aplico a lo que de verdad me gusta: construir webs. En el ciclo
        he trabajado tanto en front como en back, y en mi proyecto final propuse
        la idea y el stack, y coordiné al equipo.
      </p>
      <p>
        Busco un equipo donde seguir aprendiendo y aportar desde el primer día.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about {
  max-width: 1120px;
  margin: 0 auto;
  padding: 96px 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
}

.about-heading {
  flex: 1 1 280px;
  min-width: 0;
}

.about-text {
  flex: 2 1 480px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 19px;
  color: var(--color-text);
}

.about-text p {
  margin: 0;
}
</style>
