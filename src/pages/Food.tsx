import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import FragmentBackground from '@/components/FragmentBackground';
import HeroSectionFood from '@/components/HeroSectionFood';
import ResultsSectionFood from '@/components/ResultsSectionFood';
import ServicesSectionFood from '@/components/ServicesSectionFood';
import TestimonialsSectionFood from '@/components/TestimonialsSectionFood';
import MissionSectionFood from '@/components/MissionSectionFood';
import HireUsSectionFood from '@/components/HireUsSectionFood';
import AboutSectionFood from '@/components/AboutSectionFood';
import FAQSectionFood from '@/components/FAQSectionFood';
import Footer from '@/components/Footer';

const Food = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string, opts?: { forceSectionTop?: boolean }) => {
    if (id === 'hire-us' && !opts?.forceSectionTop) {
      const ctaBtn = document.getElementById('whatsapp-cta-card');
      if (ctaBtn) {
        ctaBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <FragmentBackground />
      <Navigation scrollToSection={scrollToSection} />
      {/* Altere os componentes abaixo para versões específicas do nicho food/franquias se desejar */}
      <HeroSectionFood scrollToSection={scrollToSection} />
      <ResultsSectionFood />
      <ServicesSectionFood scrollToSection={scrollToSection} />
      <TestimonialsSectionFood />
      <MissionSectionFood />
      <HireUsSectionFood />
      <AboutSectionFood scrollToSection={scrollToSection} />
      <FAQSectionFood />
      <Footer />
    </div>
  );
};

export default Food;
