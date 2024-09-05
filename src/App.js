// App.js
import React from 'react';
import { MantineProvider, Container } from '@mantine/core';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutMe';
import ServicesSection from './components/Service';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import "@mantine/core/styles.css"
function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <Header />
      <HeroSection />
      <Container>
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </Container>
      <Footer />
    </MantineProvider>
  );
}

export default App;
