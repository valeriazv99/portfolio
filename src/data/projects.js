export const projects = [
  {
    id: "lightweight",
    title: "LightWeight",
    label: "Proyecto final · equipo de 4",
    description:
      "Plataforma web de fitness y coaching: rutinas, entrenamientos guiados y comunicación entre entrenador y cliente.",
    role: "La idea fue mía, propuse el stack y coordiné al equipo.",
    tech: ["React", "NestJS", "Jira", "OpenSpec"],
    repo: "https://github.com/valeriazv99/lightweight-fitness",
    images: [
      "/projects/lightweight-login.webp",
      "/projects/lightweight-dashboard.webp",
      "/projects/lightweight-rutina.webp",
      "/projects/lightweight-progreso.webp",
    ],
    featured: true,
  },
  {
    id: "sala-onirica",
    title: "Sala Onírica",
    label: "Proyecto individual",
    description:
      "Plataforma de venta de entradas con selección de asientos en tiempo real. Si dos personas pulsan el mismo asiento a la vez, solo una se lo queda: nunca se vende dos veces.",
    role: "Todo, de principio a fin: requisitos, arquitectura, frontend, dos backends, tests e infraestructura.",
    tech: [
      "Nuxt 3",
      "Vue 3",
      "Pinia",
      "NestJS",
      "Laravel",
      "PostgreSQL",
      "Socket.IO",
      "Docker",
    ],
    repo: "https://github.com/valeriazv99/sala-onirica-tickets",
    images: [
      "/projects/sala-onirica-cartelera.webp",
      "/projects/sala-onirica-asientos.webp",
      "/projects/sala-onirica-compra.webp",
      "/projects/sala-onirica-dashboard.webp",
      "/projects/sala-onirica-admin.webp",
    ],
    featured: true,
  },
  {
    id: "the-lost-word",
    title: "The Lost Word",
    label: "Equipo de 5",
    description:
      "Juego multijugador de mecanografía en tiempo real: escribe rápido y con precisión para sobrevivir.",
    tech: ["Vue 3", "Node.js", "Express", "Socket.IO", "MySQL"],
    repo: "https://github.com/valeriazv99/the-lost-word-game",
    featured: false,
  },
  {
    id: "autoescola-quiz",
    title: "Autoescola Quiz",
    label: "Primer proyecto individual",
    description:
      "Web para practicar el examen teórico de conducir, con contrarreloj y panel de administración.",
    tech: ["JavaScript", "PHP", "MySQL"],
    repo: "https://github.com/valeriazv99/autoescola-quiz",
    featured: false,
  },
  {
    id: "clawd-mochi",
    title: "Clawd Mochi",
    label: "En construcción",
    description:
      "Mascota física de escritorio inspirada en Clawd, de Claude Code: pantalla táctil con animaciones, reloj y el tiempo. Mi versión de un proyecto open source, con carcasa impresa en 3D.",
    tech: ["ESP32", "C++ (Arduino)", "Impresión 3D"],
    repo: "https://github.com/valeriazv99/clawd-mochi-desk-pet",
    featured: false,
    wip: true,
    linkText: "Seguir el progreso →",
  },
];
