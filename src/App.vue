<script setup>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import AboutSection from "./components/AboutSection.vue";
import StackSection from "./components/StackSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <ProjectsSection />
    <AboutSection />
    <StackSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
