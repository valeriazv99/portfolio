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
        Ahora lo aplico a lo que de verdad me gusta: construir webs. Me muevo
        entre front y back, pero donde más disfruto es en la interfaz: cuidar
        los detalles para que quien la use no tenga que pensar. Y cuando un
        proyecto pide una herramienta nueva, me pongo a aprenderla.
      </p>
      <p>
        Busco un equipo donde seguir aprendiendo y aportar desde el primer día.
        Estoy en Barcelona, con disponibilidad para empezar ya, en remoto,
        híbrido o presencial.
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
